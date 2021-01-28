import { ThemeProvider } from "styled-components";
import db from "../db.json";

import { GlobalStyle } from "../styles/globalStyles";

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
