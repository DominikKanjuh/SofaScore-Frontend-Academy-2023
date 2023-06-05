export type ThemeType = typeof light;

export const light = {
  color: {
    primary: {
      default: "#374df5",
      variant: "#1327ba",
      highlight: "#e1edfe",
    },
    secondary: {
      default: "#f0eedf",
      variant: "#dddbc9",
      highlight: "#f7f6ef",
    },
    onColor: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
    surface: {
      s0: "#eff3f8",
      s1: "#ffffff",
      s2: "rgba(192, 207, 228, 0.2)",
    },
    onSurface: {
      lv1: "#121212",
      lv2: "rgba(18, 18, 18, 0.4)",
      lv3: "rgba(18, 18, 18, 0.2)",
      lv4: "rgba(18, 18, 18, 0.1)",
    },
    status: {
      error: "#ea4545",
      alert: "#d8b127",
      success: "#1da86d",
    },
    specific: {
      live: "#e93030",
    },
  },
  layer: {
    elevation: {
      e1: "#ffffff",
      e2: "#ffffff",
    },
  },
};

export const dark = {
  color: {
    primary: {
      default: "#849afd",
      variant: "#afbeff",
      highlight: "#2d385c",
    },
    secondary: {
      default: "#3a3a39",
      variant: "#404039",
      highlight: "#171616",
    },
    onColor: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
    surface: {
      s0: "#101114",
      s1: "#21242d",
      s2: "rgba(0, 0, 0, 0.4)",
    },
    onSurface: {
      lv1: "#ffffff",
      lv2: "rgba(255, 255, 255, 0.4)",
      lv3: "rgba(255, 255, 255, 0.2)",
      lv4: "rgba(255, 255, 255, 0.1)",
    },
    status: {
      error: "#f26666",
      alert: "#ecca51",
      success: "#30b87f",
    },
    specific: {
      live: "#f14b4b",
    },
  },
  layer: {
    elevation: {
      e1: "#2b2e38",
      e2: "#2b2e38",
    },
  },
};

const theme: ThemeType = light;
export default theme;
