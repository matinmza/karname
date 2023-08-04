import { Components } from "@mui/material/styles";
import theme from "..";

const MuiGrid: Components<typeof theme>["MuiGrid"] = {
  defaultProps: {
    spacing: "1rem",
  },
};

export default MuiGrid;
