import Head from "next/head";
import Page from "../components/Page";
import ContactUsComp from "../components/shared/Contact/ContactUsComp";
import HomeServices from "../components/views/Home/components/HomeServices";

export default function Custom404() {
  return (
    <Page>
      <Head>
        <title>404 | Flood & Fire Solutions │ Restoration Company</title>
        <meta
          name="description"
          content="Like all our restoration projects, we are constantly looking to improve our website. We apologize that this link is broken. Look below for more options."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://floodandfiresolutions.com/404" />
      </Head>
      <section className="format-text">
        <h1 className="txt-center" style={{ fontSize: "64px" }}>
          404
        </h1>
        <h2 className="txt-center">404 Page Not Found.</h2>
        <p className="txt-center">
          Like all our restoration projects, we are constantly looking to
          improve our website. We apologize that this link is broken. Look below
          for more options.
        </p>
      </section>
      <ContactUsComp />
    </Page>
  );
}
