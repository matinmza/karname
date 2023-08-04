import { Components } from "@mui/material/styles";
import theme from "..";

const MuiInput: Components<typeof theme>["MuiInput"] = {
  styleOverrides: {
    root: ({ theme }) =>
      theme.unstable_sx({
        backgroundColor: "naturals.white",
        borderRadius: "0.375rem",
        color: "naturals.black",
        px: "1rem",
        py: "0.5rem",
        border: "1px solid gray.light",
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "1.25rem",
        "&::after": {
          display: "none",
        },
        "&::before": {
          display: "none",
        },
      }),
  },
};

export default MuiInput;
