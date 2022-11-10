import Head from "next/head";
import Page from "../../Page";
import ContactUsComp from "../../shared/Contact/ContactUsComp";

export default function Error410() {
  return (
    <Page>
      <Head>
        <title>410</title>
        <meta
          name="description"
          content="Like all our restoration projects, we are constantly looking to improve our website. We apologize that this link is broken. Look below for more options."
        />
        <link rel="canonical" href="https://floodandfiresolutions.com/410" />
      </Head>
      <section className="format-text">
        <h1 className="txt-center" style={{ fontSize: "64px" }}>
          410
        </h1>
        <h2 className="txt-center">410 Page Removed</h2>
        <p className="txt-center">
          Like all our restoration projects, we are constantly looking to
          improve our website. We apologize that this page has been removed.
          Look below for more options.
        </p>
      </section>
      <ContactUsComp />
    </Page>
  );
}
