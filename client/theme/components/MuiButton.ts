import { Components } from "@mui/material/styles";
import theme from "..";

const MuiButton: Components<typeof theme>["MuiButton"] = {
  styleOverrides: {
    contained: ({ theme }) =>
      theme.unstable_sx({
        backgroundColor: "primary.main",
        color: "#FFFFFF",
        boxShadow: 0,
        "&:hover": {
          backgroundColor: "#16AE56",
        },
      }),
    outlined: ({ theme }) =>
      theme.unstable_sx({
        border: 1,
        borderColor: "primary.main",
        color: "primary.main",
        "&:hover": {
          color: "#16AE56",
          borderColor: "#16AE56",
        },
      }),
    text: ({ theme }) =>
      theme.unstable_sx({
        color: "primary.main",
      }),
    sizeSmall: {
      fontSize: "0.6rem",
      lineHeight: "1rem",
      fontWeight: 700,
      paddingX: "0.4375rem",
      height: "2.25rem",
    },
    sizeMedium: {
      fontSize: "0.8rem",
      lineHeight: "1.25rem",
      fontWeight: 700,

      height: "2.25rem",
    },
  },
  defaultProps: {
    variant: "contained",
  },
};

export default MuiButton;
