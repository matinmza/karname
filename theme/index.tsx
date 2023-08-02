import { createTheme } from "@mui/material";
import { faIR } from "@mui/material/locale";
import palette from "./palette";
import components from "./components";
import { yekan } from "@/app/font";

const theme = createTheme(
  {
    direction: "rtl",
    palette,
    components,
    typography: {
      fontFamily: yekan.style.fontFamily,
    },
  },
  faIR
);

export default theme;
