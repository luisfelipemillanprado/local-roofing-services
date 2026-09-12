"use client";

import { useEffect, useRef } from "react";
import {
  LngLatBounds,
  MapLibreMap,
  Marker,
  NavigationControl,
  Popup,
  setWorkerUrl,
  type StyleSpecification,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { OfficeMapProps } from "@/shared-sections/service-areas/types";

/* worker + shared chunk are copied to public/maplibre by scripts/copy-maplibre-worker.mjs */
setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");

/* light brand pass over the provider style: drop POI and house-number clutter */
const HIDDEN_SOURCE_LAYERS = new Set(["poi", "housenumber"]);

/* has-guard numeric comparisons on missing props: same false result, no MapLibre 6 warning */
const NUMERIC_COMPARISONS = new Set(["<", "<=", ">", ">="]);
const guardMissing = (node: unknown): unknown => {
  if (!Array.isArray(node)) return node;
  const [op, operand] = node;
  const readsProperty = Array.isArray(operand) && operand[0] === "get" && typeof operand[1] === "string";
  if (typeof op === "string" && NUMERIC_COMPARISONS.has(op) && readsProperty) {
    return ["all", ["has", operand[1]], node];
  }
  return node.map(guardMissing);
};

const lightenStyle = (_previous: StyleSpecification | undefined, next: StyleSpecification) => ({
  ...next,
  layers: next.layers
    .filter((layer) => !("source-layer" in layer && HIDDEN_SOURCE_LAYERS.has(layer["source-layer"] ?? "")))
    .map((layer) =>
      "filter" in layer && layer.filter
        ? { ...layer, filter: guardMissing(layer.filter) as typeof layer.filter }
        : layer,
    ),
});

/* fit margin so a pin near the edge keeps its 44px head inside the frame */
const FIT_PADDING = { top: 48, right: 16, bottom: 24, left: 16 };

/* brand pin: graphite drop with an amber core, since the style paints roads amber */
const PIN_SVG =
  '<svg viewBox="0 0 24 32" aria-hidden="true" class="h-8 w-6 drop-shadow-md"><path class="fill-contrast" d="M12 0C5.4 0 0 5.2 0 11.6 0 20.3 12 32 12 32s12-11.7 12-20.4C24 5.2 18.6 0 12 0Z"/><circle cx="12" cy="11.5" r="4.5" class="fill-primary"/></svg>';

/* MapLibre instance: rendering + interaction + markers (future route layers attach here) */
export const OfficeMapCanvas = ({ styleUrl, view, limit, offices, labels }: OfficeMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const miami = new LngLatBounds([view.west, view.south], [view.east, view.north]);
    const map = new MapLibreMap({
      container,
      bounds: miami,
      fitBoundsOptions: { padding: FIT_PADDING },
      maxBounds: new LngLatBounds([limit.west, limit.south], [limit.east, limit.north]),
      maxZoom: 17,
      /* page scroll with one finger / plain wheel; map with two fingers / ctrl+wheel */
      cooperativeGestures: true,
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
      locale: {
        "Map.Title": labels.region,
        "NavigationControl.ZoomIn": labels.zoomIn,
        "NavigationControl.ZoomOut": labels.zoomOut,
        "Popup.Close": labels.closePopup,
        "AttributionControl.ToggleAttribution": labels.toggleAttribution,
        "CooperativeGesturesHandler.MobileHelpText": labels.gestureMobile,
        "CooperativeGesturesHandler.WindowsHelpText": labels.gestureWindows,
        "CooperativeGesturesHandler.MacHelpText": labels.gestureMac,
      },
    });
    map.touchZoomRotate.disableRotation();
    map.keyboard.disableRotation();
    map.addControl(new NavigationControl({ showCompass: false }), "top-right");
    map.setStyle(styleUrl, { transformStyle: lightenStyle });

    /* open on the approved area and make it the floor, so the map only ever zooms in */
    const frameMiami = () => {
      map.setMinZoom(0);
      map.fitBounds(miami, { padding: FIT_PADDING, animate: false });
      map.setMinZoom(map.getZoom());
      /* NavigationControl restyles its buttons on move, and the floor was set after the last one */
      map.fire("move");
    };

    /* keep Miami framed on resize (rotation, window) until the user moves the map */
    let userMoved = false;
    map.on("movestart", (event) => {
      if (event.originalEvent) userMoved = true;
    });
    map.on("resize", () => {
      if (!userMoved) frameMiami();
    });

    /* test hooks: readiness + current camera */
    const syncCamera = () => {
      const { lng, lat } = map.getCenter();
      container.dataset.zoom = map.getZoom().toFixed(2);
      container.dataset.center = `${lat.toFixed(4)},${lng.toFixed(4)}`;
    };
    map.once("load", () => {
      /* lock the floor once the style settles, or the transform re-constrains past it */
      frameMiami();
      container.dataset.ready = "true";
      syncCamera();
    });
    map.on("moveend", syncCamera);

    /* narrow maps: fold the attribution to its (i) after 5s, as OSM allows (one finger never drags) */
    const foldAttribution = window.setTimeout(() => {
      const attribution = container.querySelector(".maplibregl-compact-show");
      attribution?.classList.remove("maplibregl-compact-show");
      attribution?.removeAttribute("open");
    }, 5000);
    map.on("remove", () => window.clearTimeout(foldAttribution));

    /* pins only for offices with approved coordinates */
    for (const office of offices) {
      if (!office.position) continue;
      const [lat, lng] = office.position;

      const pin = document.createElement("button");
      pin.type = "button";
      pin.className =
        "office-marker grid size-11 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
      pin.setAttribute("aria-label", `${office.name}, ${office.address}`);
      pin.innerHTML = PIN_SVG;

      const card = document.createElement("div");
      card.className = "grid gap-1 pr-6";
      const name = document.createElement("p");
      name.className = "font-semibold text-foreground";
      name.textContent = office.name;
      const address = document.createElement("p");
      address.className = "text-foreground-muted";
      address.textContent = office.address;
      card.append(name, address);

      new Marker({ element: pin, anchor: "bottom" })
        .setLngLat([lng, lat])
        .setPopup(new Popup({ offset: 36, className: "office-popup", maxWidth: "16rem" }).setDOMContent(card))
        .addTo(map);
    }

    /* removes markers, popups, listeners and the WebGL context */
    return () => map.remove();
  }, [styleUrl, view, limit, offices, labels]);

  /* size, not position: unlayered .maplibregl-map sets position: relative over layered utilities */
  return <div ref={containerRef} data-office-map-canvas className="h-full w-full" />;
};
