"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { Color } from "./color";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {},
});

export default theme;
