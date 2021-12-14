import "../styles/globals.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../sdk/component/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
