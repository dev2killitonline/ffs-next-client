import Head from "next/head";
import Page from "../components/Page";
import ContactUsComp from "../components/shared/Contact/ContactUsComp";
import LocationComp from "../components/shared/Contact/LocationComp";

export default function Contact() {
  return (
    <Page>
      <Head>
        <title>Contact Us - Flood & Fire Solutions</title>
        <meta
          name="description"
          content="Available 24/7 and always ready to help. Have questions? Give us a call. Ready to respond to emergencies day or night. Contact us."
        />
        <link
          rel="canonical"
          href="https://floodandfiresolutions.com/contact"
        />
      </Head>
      <div className="contact">
        <ContactUsComp />
        <LocationComp />
      </div>
    </Page>
  );
}
