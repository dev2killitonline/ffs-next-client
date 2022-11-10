import Head from "next/head";
import Page from "../components/Page";

import BannerComp from "../components/shared/Banner/BannerComp";
import ContactUsComp from "../components/shared/Contact/ContactUsComp";
import IntroComp from "../components/shared/Intro/IntroComp";
import ServicesComp from "../components/shared/Services/ServicesComp";
import InsuranceComp from "../components/shared/Insurance/InsuranceComp";
import State from "../services/state";
import SectionComp from "../components/shared/Section/SectionComp";
import CallNowRibbon from "../components/shared/CallNowRibbon/CallNowRibbon";
import Script from "next/script";
import ReviewsComp from "../components/shared/Reviews/ReviewsComp";
const bannerImage = "/images/biohazard-img-compressed.webp";
const IICRC = "/images/webp/IICRC-compressed.webp";

const { biohazard, biohazardcontentimage } = State;

export default function Biohazards() {
  return (
    <Page>
      <Head>
        <title>Biohazard Cleanup Pros - Flood & Fire Solutions</title>
        <meta
          name="description"
          content="Licensed & certified to cleanup biohazards. Discrete and professional services. Call us today to discuss your cleanup needs."
        />
        <link
          rel="canonical"
          href="https://floodandfiresolutions.com/biohazards"
        />
      </Head>
      <div className="biohazards">
        <BannerComp
          background="banner--biohazard"
          headingText="Biohazard Restoration"
          position="top"
          subheadingText="Emergency Cleanup Services With Quick 24/7 Response"
          buttonText="Call Us Now - 24/7"
        />

        <div className="page__container">
          <IntroComp heading="Trauma & Crime Scene Cleanup in Idaho Falls & Eastern Idaho">
            <h3 className="cert-badge">
              <img
                src={IICRC}
                className="flood--iicrc"
                alt="Institute of Inspection Cleaning and Restoration Certification"
              />
              Certified in antimicrobial remediation
            </h3>
            <p className="intro__first-paragraph">
              Flood and Fire Solutions handles trauma cleanup for situations
              such as crime scenes, suicides, unattended deaths, and the
              decomposition of other organic material in and around your home,
              business, or vehicle.
            </p>
            <p>
              Trauma cleanup can be an overwhelming and sensitive necessity. You
              should not feel obligated to figure out how to clean up after a
              tragedy. We understand that compassion and discretion are
              necessary when handling these cases. In the face of difficult
              circumstances, we provide honesty, empathy, and efficiency while
              following OSHA and EPA protocols to ensure your safety and
              security. Trauma cleanup is also known as Biohazard Remediation.
            </p>
          </IntroComp>
          <ReviewsComp />

          <SectionComp heading="What is a Biohazard?">
            <p>
              Biohazards are classified as any virus, toxin, or micro-organism
              that poses a danger to human life. Biohazards include blood,
              bodily fluids, chemical waste, and decomposing organic substances.
              A biohazard needs to be properly contained, cleaned, and sanitized
              immediately, as exposure to a biohazard poses a significant health
              risk. With specialized training, protective equipment, procedures,
              and experience, we are ready for your call.
            </p>
          </SectionComp>
        </div>

        <CallNowRibbon />
        <div className="page__container">
          <InsuranceComp />
          <ContactUsComp />
        </div>
      </div>
    </Page>
  );
}
