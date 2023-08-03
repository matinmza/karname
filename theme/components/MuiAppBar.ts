import { Components } from "@mui/material/styles";
import theme from "..";

const MuiAppBar: Components<typeof theme>["MuiAppBar"] = {
  styleOverrides: {
    root: {
      boxShadow: "0px 3px 50px -1px rgba(50, 50, 71, 0.05)",
      backgroundColor: "#FFFFFF",
      height: "4.25rem",
    },
  },
};

export default MuiAppBar;
