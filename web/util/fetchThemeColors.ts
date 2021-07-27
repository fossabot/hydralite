import { themeNameType } from "~/types/Theme.type";

export function fetchThemeColors(theme: themeNameType = "dark") {
  switch (theme) {
    case "dark":
      return {
        bg: "#242832",
        fg: "#ffffff",
        textMuted: "#E5E5E5",
        bgMuted1: "#1C212D",
        bgMuted2: "#1C212D75",
        bgMuted3: "#292F40",
        color: {
          accent: "#695cff",
          yellow: "#EFA119",
        },
      };
  }
}
