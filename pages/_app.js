import '@styles/globals.css'
import { ThemeProvider } from "next-themes";

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Application
