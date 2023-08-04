import { Components } from "@mui/material/styles";
import theme from "..";

const MuiContainer: Components<typeof theme>["MuiContainer"] = {
  styleOverrides: {
    root: ({ theme }) =>
      theme.unstable_sx({
        width: "100%",
        maxWidth: 1366,
        px: {
          xs: "10px",
          lg: "56px",
        },
      }),
  },
  defaultProps: {
    maxWidth: false,
    disableGutters: true,
  },
};

export default MuiContainer;
