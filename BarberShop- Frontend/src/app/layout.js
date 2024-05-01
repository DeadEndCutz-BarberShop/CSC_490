import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import ReduxProvider from "../lib/ReduxProvider/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <ToastContainer />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
