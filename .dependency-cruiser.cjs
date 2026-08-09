/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "common-stays-pure",
      comment: "common/ holds primitives; it must not import from higher tiers",
      severity: "error",
      from: { path: "^src/common/" },
      to: { path: "^src/(shared-sections|features|layout|app)/" },
    },
    {
      name: "shared-sections-no-features",
      comment: "shared-sections must not depend on features or app",
      severity: "error",
      from: { path: "^src/shared-sections/" },
      to: { path: "^src/(features|app)/" },
    },
    {
      name: "layout-no-features",
      comment: "layout chrome must not depend on features or app",
      severity: "error",
      from: { path: "^src/layout/" },
      to: { path: "^src/(features|app)/" },
    },
    {
      name: "features-no-cross-feature",
      comment: "a feature must not import from a different feature",
      severity: "error",
      from: { path: "^src/features/([^/]+)/" },
      to: { path: "^src/features/([^/]+)/", pathNot: "^src/features/$1/" },
    },
    {
      name: "features-no-app",
      comment: "features must not depend on app",
      severity: "error",
      from: { path: "^src/features/" },
      to: { path: "^src/app/" },
    },
    {
      name: "data-stays-pure",
      comment: "data/ must not import component runtime; type-only imports are allowed",
      severity: "error",
      from: { path: "^src/data/" },
      to: {
        path: "^src/(common|shared-sections|features|layout|app)/",
        dependencyTypesNot: ["type-only"],
      },
    },
    {
      name: "no-circular",
      comment: "no circular dependencies",
      severity: "error",
      from: {},
      to: { circular: true },
    },
    {
      name: "not-to-unresolvable",
      comment: "modules must resolve to something on disk",
      severity: "error",
      from: {},
      to: { couldNotResolve: true },
    },
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    /* resolve the @/* alias and read the same compiler settings as the app */
    tsConfig: { fileName: "tsconfig.json" },
    /* follow type-only imports so the data type-only exception can be judged */
    tsPreCompilationDeps: true,
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"],
      mainFields: ["module", "main", "types", "typings"],
    },
  },
};
