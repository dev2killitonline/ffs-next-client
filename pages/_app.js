import Head from "next/head";
import GoogleTagManager from "../components/GoogleTagManager";
import ContactUsButton from "../components/static/contactUsButton/ContactUsButton";
import "../scss/App.scss";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <ContactUsButton/>
    </GoogleTagManager>
  );
}

export default MyApp;
