export type PillColor = {
  bg: string;
  fg: string;
};

export type LinkTreeTheme = {
  colors: {
    cream: string;
    ink: string;
    dim: string;
    rose: string;
    brown: string;
    denim: string;
    latte: string;
    border: string;
    scrollTrack: string;
    scrollThumb: string;
    scrollThumbHover: string;
    spiralFront: string;
  };
  pillColors: PillColor[];
};

export const theme: LinkTreeTheme = {
  colors: {
    cream: "#FBF3DE",
    ink: "#1F3B4D",
    dim: "#5C88A6",
    rose: "#F2A0A0",
    brown: "#E08A3C",
    denim: "#2FA8D5",
    latte: "#F7D774",
    border: "rgba(31,59,77,0.15)",
    scrollTrack: "rgba(247,215,116,0.24)",
    scrollThumb: "linear-gradient(180deg, rgba(47,168,213,0.68), rgba(242,160,160,0.58))",
    scrollThumbHover: "linear-gradient(180deg, rgba(31,59,77,0.78), rgba(242,160,160,0.74))",
    spiralFront: "#E4572E"
  },
  pillColors: [
    { bg: "#F2A0A0", fg: "#1F3B4D" },
    { bg: "#2FA8D5", fg: "#FBF3DE" },
    { bg: "#F7D774", fg: "#1F3B4D" },
    { bg: "#E4572E", fg: "#FBF3DE" }
  ]
};
