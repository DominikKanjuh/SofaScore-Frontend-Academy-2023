export type ThemeType = typeof light;

export const light = {
  primary: {
    default: "#374df5",
    variant: "#1327ba",
    highlight: "#e1edfe",
  },
};

export const dark = {
  primary: {
    default: "#849afd",
    variant: "#afbeff",
    highlight: "#2d385c",
  },
};

const theme: ThemeType = light;
export default theme;
