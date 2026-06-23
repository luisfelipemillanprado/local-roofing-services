/** Blur placeholders per image type (string src has no auto-blur). */
export const blurs = {
  /** Brand badge — logo. */
  logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABZElEQVR4nAXBy07bQBQA0HvtO2N7PPYMODSJUSsBRVSwYFepi3484gO66EsCpY0QrdIQt4kTO7Yzj56DWutpURRXk8n4Y5rKD4h4AQCh9/5n0zT3i8XirqqqByqK4lIpdct4fAkYcg/Ygnc5gD/inL9WSp0BQEfTsnzPKHpHPE2QxBOA/wOuL8H1jnN0WutCCHFOUqpTRI4Rk4s4yl4cQND1u78Hs2UIwz8iCpIk0cRYWsUs2UwlsTLvhPXof21YvWxi6g8+8mBPAsSIVCJXExGMro+35Xlea+sRZqHYfQe2/70Nk9ZYYZ3Z05k0cJG15U1eXY2TJvMOUGaiZ0au0LDmeQfB9mCRlHlux9ixEbZKOnMCznMKjQ2ETW2X/tg3/rHu2if6Ops95gM7fsPYKyVRhB7i1A84DhBP0aw/t8O39bL+Qp/mq3kWyOitVnoU8SxEYIFFJGeXftjN1uv64WW1mf8HPNWcsfYkXPsAAAAASUVORK5CYII=",
  /** Dark blue-grey — content imagery. */
  image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAEUlEQVR4nGPQMrTCihiGlgQAipolQQ9xxUMAAAAASUVORK5CYII=",
  /** Mid grey — avatars. */
  avatar:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAEUlEQVR4nGOoqGnCihiGlgQAhmRdgbNoafUAAAAASUVORK5CYII=",
} as const;
