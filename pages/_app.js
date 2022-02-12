import "../styles/globals.css";
import { polyfill } from "smoothscroll-polyfill";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => polyfill(), []);
  return <Component {...pageProps} />;
}

export default MyApp;
