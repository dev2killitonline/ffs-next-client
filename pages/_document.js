import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager - Global base code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "Flood & Fire Solutions",
  "telephone": "(208) 521-9741",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "570 W 19th St",
    "addressLocality": "Idaho Falls",
    "addressRegion": "ID",
    "postalCode": "83402"
  }
}`,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Roboto:300,400,700&display=swap"
            rel="stylesheet"
          ></link>
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <noscript>
            <iframe
              title="This frame allows us to track usage metrics on our website! It is visually hidden from all users."
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
