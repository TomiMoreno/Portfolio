import { NextIntlProvider } from "next-intl";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      timeZone="America/Argentina/Buenos_Aires"
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
