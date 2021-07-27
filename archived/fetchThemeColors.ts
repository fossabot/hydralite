export function fetchThemeColors(theme = "dark") {
  switch (theme) {
    case "dark":
      return {
        bg: "#242832",
        fg: "#ffffff",
        textMuted: "#E5E5E5",
        bgMuted1: "#1C212D",
        bgMuted2: "#272D3D",
        bgMuted3: "#1C212D75",
        bgMuted4: "#292F40",
        color: {
          accent: "#695cff",
          yellow: "#EFA119",
        },
      };
  }
}
