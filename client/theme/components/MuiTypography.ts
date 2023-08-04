import { Components } from "@mui/material/styles";
import theme from "..";

const MuiTypography: Components<typeof theme>["MuiTypography"] = {
  styleOverrides: {
    h1: ({ theme }) =>
      theme.unstable_sx({
        fontWeight: 800,
        lineHeight: "2.25rem",
        fontSize: {
          xs: "1rem",
          sm: "1.5rem",
        },
      }),

    h2: {
      fontWeight: 800,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },

    h4: {
      fontWeight: 700,
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
    },
  },
  defaultProps: {
    color: "naturals.black",
  },
};

export default MuiTypography;
