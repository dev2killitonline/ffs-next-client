import Head from "next/head";
import Page from "../components/Page";

export default function PrivacyPolicy() {
  return (
    <Page>
      <Head>
        <title>Privacy Policy | Flood & Fire Solutions</title>
        <meta
          name="description"
          content="Privacy Policy for floodandfiresolutions.com"
        />
        <meta name="robots" content="noindex" />
        <link
          rel="canonical"
          href="https://floodandfiresolutions.com/privacy-policy"
        />
      </Head>
      <div className="pp format-text">
        <h1 className="pp__heading">Privacy Policy</h1>
        <p className="pp__paragraph">
          Your privacy is very important to us. Accordingly, we have developed
          this Policy in order for you to understand how we collect, use,
          communicate and disclose and make use of personal information. The
          following outlines our privacy policy.
        </p>
        <ul className="pp__list">
          <li className="pp__list-item">
            Before or at the time of collecting personal information, we will
            identify the purposes for which information is being collected.
          </li>
          <li className="pp__list-item">
            We will collect and use of personal information solely with the
            objective of fulfilling those purposes specified by us and for other
            compatible purposes, unless we obtain the consent of the individual
            concerned or as required by law.
          </li>
          <li className="pp__list-item">
            We will only retain personal information as long as necessary for
            the fulfillment of those purposes.
          </li>
          <li className="pp__list-item">
            We will collect personal information by lawful and fair means and,
            where appropriate, with the knowledge or consent of the individual
            concerned.
          </li>
          <li className="pp__list-item">
            Personal data should be relevant to the purposes for which it is to
            be used, and, to the extent necessary for those purposes, should be
            accurate, complete, and up-to-date.
          </li>
          <li className="pp__list-item">
            We will protect personal information by reasonable security
            safeguards against loss or theft, as well as unauthorized access,
            disclosure, copying, use or modification.
          </li>
          <li className="pp__list-item">
            We will make readily available to customers information about our
            policies and practices relating to the management of personal
            information.
          </li>
        </ul>
        <p className="pp__paragraph">
          We are committed to conducting our business in accordance with these
          principles in order to ensure that the confidentiality of personal
          information is protected and maintained.
        </p>
      </div>
    </Page>
  );
}
