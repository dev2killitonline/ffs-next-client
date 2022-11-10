import Head from "next/head";
import Page from "../components/Page";
import BannerComp from "../components/shared/Banner/BannerComp";
import ContactUsComp from "../components/shared/Contact/ContactUsComp";
import IntroComp from "../components/shared/Intro/IntroComp";
import ServicesComp from "../components/shared/Services/ServicesComp";
import RisksComp from "../components/shared/Risks/RisksComp";
import InsuranceComp from "../components/shared/Insurance/InsuranceComp";
import State from "../services/state";
import Script from "next/script";
import ReviewsComp from "../components/shared/Reviews/ReviewsComp";

const { moldServices } = State;

const IICRC = "/images/webp/IICRC-compressed.webp";

export default function Mold() {
  return (
    <Page>
      <Head>
        <title>
          Mold Remediation & Restoration Pros - Flood & Fire Solutions{" "}
        </title>
        <meta
          name="description"
          content="Mold remediation professionals. Licensed and certified to remediate mold at any scale. Call us today to discuss your mold clean up options. "
        />
        <link rel="canonical" href="https://floodandfiresolutions.com/mold" />
      </Head>
      <main className="mold">
        <BannerComp
          background="banner--mold"
          headingText="Have Mold in your house?"
          subheadingText="Emergency Cleanup Services With Quick 24/7 Response"
          buttonText="Call Us Now - 24/7"
        />
        <div className="page__container">
          <IntroComp
            heading="Don't Worry! We've Got You Covered"
            // videoSrc={FireVideo}
            // videoCaption={"We are burning this mold alive."}
            // videoType="local"
          >
            <h3 className="cert-badge">
              <img
                src={IICRC}
                className="flood--iicrc"
                alt="Institute of Inspection Cleaning and Restoration Certification"
              />
              Certified in water damage restoration and antimicrobial
              remediation
            </h3>
            <p>
              Discovering mold in your home is unsettling, for good reasons.
              Mold spreads rapidly, and should be treated with urgency. Were
              experts in mold remediation, cleaning and restoration, and we used
              the latest technology to keep you safe and healthy. Detailed,
              honest and efficient--were available 24/7.
            </p>
          </IntroComp>
          <ServicesComp
            services={moldServices}
            heading="Mold Damage Restoration Services"
          />
          <ReviewsComp />
          <RisksComp heading="Risks Of Mold">
            <p>
              The presence of mold and mildew in your home or office can go
              virtually unnoticed, but can have a significant impact on your
              health and the stability of your structure. If left untreated,
              mold damage can cause a variety of health issues, especially among
              those with respiratory problems or allergies and children. Mold
              spores can also become airborne and contaminate other areas of
              your home or business dramatically affecting the indoor air
              quality.
            </p>
          </RisksComp>
          <InsuranceComp />
          <ContactUsComp />
        </div>
      </main>
    </Page>
  );
}
