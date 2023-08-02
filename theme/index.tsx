import { createTheme } from "@mui/material";
import { faIR } from "@mui/material/locale";
import palette from "./palette";
import components from "./components";

const theme = createTheme({ direction: "rtl", palette, components }, faIR);

export default theme;
