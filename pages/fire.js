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
const IICRC = "/images/webp/IICRC-compressed.webp";

const { fireServices, fireReviews } = State;

export default function Fire() {
  return (
    <Page>
      <Head>
        <title>Fire Damage Restoration Pros - Flood & Fire Solutions</title>
        <meta
          name="description"
          content="Flood & Fire Solutions has saved countless homes and businesses from fire and smoke. We value what we can save for you. From cleaning to rebuild. Read reviews."
        />
        <link rel="canonical" href="https://floodandfiresolutions.com/fire" />
      </Head>
      <div className="fire">
        <BannerComp
          background="banner--fire"
          headingText="Fire Damage Cleaning and Restoration"
          subheadingText="Superior Restoration Work and Personal Property Recovery"
          buttonText="Call Us Now - 24/7"
        />

        <div className="page__container">
          <IntroComp
            heading="Don't Stress! We've Got You Covered"
            // videoSrc={<iframe src="https://www.youtube.com/embed/SIkpl7xCp0I" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="intro__video--embeded" />}
            // videoCaption="This is an intense fire"
            // videoType="embed"
          >
            <h3 className="cert-badge">
              <img
                src={IICRC}
                className="flood--iicrc"
                alt="Institute of Inspection Cleaning and Restoration Certification"
              />
              Certified in smoke and fire damage restoration
            </h3>

            <p>
              Fire damage is devastating. Damaged belongings & property, the
              lingering smell of smoke, the stress of insurance and costly
              repairs are all points of anxiety--let us take it from here. From
              start to finish, our priority is your safety, confidence and
              complete restoration, beyond just the face value damage.{" "}
            </p>
            <p>
              With the latest technology, our restoration experts recover what
              others might glance over. Detailed, honest and efficient- were
              available 24/7.
            </p>
          </IntroComp>
          <ServicesComp
            services={fireServices}
            heading="Fire Damage Restoration Services"
          />
          <ReviewsComp />

          <RisksComp heading="Risks Of Fire Damage">
            <div className="fire-risks">
              <div className="fire-risks__group">
                <p>
                  You may be tempted to cleanup the damage caused by the fire on
                  your own. This can be a terrible mistake. The residue that is
                  left behind after a fire is a bio-hazard and can cause severe
                  health problems if not remediated correctly. By attempting to
                  restore the affected structure without the proper training and
                  tools, you run the risk of not only causing additional damage
                  to your property, you may be putting your own life on the
                  line!
                </p>
                <p>
                  The longer you wait to make key decisions regarding the repair
                  of your home, the more likely irreparable damage will occur.
                  Mold and water damage as a result of the relief efforts of the
                  fire department can occur, making restoration much more
                  expensive.{" "}
                </p>
                <p>
                  We want to help you by addressing your concerns and doing what
                  we do best; help your life return to normalcy.
                </p>
              </div>
            </div>
          </RisksComp>

          <InsuranceComp />
          <ContactUsComp />
        </div>
      </div>
    </Page>
  );
}
