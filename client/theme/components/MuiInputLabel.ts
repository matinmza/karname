import { Components } from "@mui/material/styles";
import theme from "..";

const MuiInputLabel: Components<typeof theme>["MuiInputLabel"] = {
  styleOverrides: {
    root: ({ theme }) =>
      theme.unstable_sx({
        borderRadius: "3.75rem",
        fontWeight: 700,
        fontSize: "0.75rem",
        color: "gray.darker",
        "&.Mui-error": {
          color: "annotations.error",
        },
      }),
  },
};

export default MuiInputLabel;
