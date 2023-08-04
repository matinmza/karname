import { Components } from "@mui/material/styles";
import theme from "..";

const MuiFormHelperText: Components<typeof theme>["MuiFormHelperText"] = {
  styleOverrides: {
    root: ({ theme }) =>
      theme.unstable_sx({
        fontSize: "0.625rem",
        fontWeight: 400,
        ml: "1.25rem",
        mt: "0.5rem",
        "&.Mui-error": {
          color: "annotations.error",
        },
      }),
  },
};

export default MuiFormHelperText;
