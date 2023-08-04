import { Components } from "@mui/material/styles";
import theme from "..";

const MuiInput: Components<typeof theme>["MuiInput"] = {
  styleOverrides: {
    root: ({ theme }) =>
      theme.unstable_sx({
        backgroundColor: "naturals.white",
        borderRadius: "6px",
        color: "naturals.black",
        px: "16px",
        py: "8px",
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
