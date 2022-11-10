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

// const FloodVideo = "/video/High Water - 14324.mp4";
const { floodServices, floodReviews } = State;
const IICRC = "/images/webp/IICRC-compressed.webp";

export default function Flood() {
  return (
    <Page>
      <Head>
        <title>Water Damage Restoration Pros - Flood & Fire Solutions</title>
        <meta
          name="description"
          content="Emergency water damage cleanup and repair available 24/7. Read reviews. Flood & Fire Solutions is your licensed flood restoration company. Call 24/7."
        />
        <link rel="canonical" href="https://floodandfiresolutions.com/flood" />
      </Head>
      <div className="flood">
        <BannerComp
          background="banner--flood"
          headingText="Water Damage and Flood Damage Restoration "
          subheadingText="Emergency Water Damage Cleanup Services With Quick 24/7 Response"
          buttonText="Call Us Now - 24/7"
        />

        <div className="page__container">
          <IntroComp
            heading="Water Damage Restoration Services"
            // videoSrc={FloodVideo}
            // videoType="local"
            // videoCaption="Everything from small floods to large leaks can effect the structural integrity of your home."
          >
            {/* <h3 className="cert-badge">We are certified to remove flooding and mitigate damage</h3>
                            <h3 className="cert-badge"><i class="fas fa-certificate cert-icon"></i>We are certified to remove flooding and mitigate damage</h3>
                            <h3 className="cert-badge"><i class="fas fa-award cert-icon"></i>We are certified to remove flooding and mitigate damage</h3> */}
            <h3 className="cert-badge">
              <img
                src={IICRC}
                className="flood--iicrc"
                alt="Institute of Inspection Cleaning and Restoration Certification"
              />
              Certified in water damage restoration
            </h3>
            <p>
              We pair our extensive experience with honesty, integrity, and
              compassion. Our knowledge of water damage allows us to properly
              assess your personal belongings and recover as much as possible.
              No matter the season, we make ourselves available 24/7. We have an
              eye for detail, we work to meet all of your needs, and we
              communicate with you so that you know exactly what is happening
              with the repair of your home.
            </p>
            <p>
              All of us at Flood & Fire Solutions have found ourselves in need
              of a good restoration crew for our own properties, so we know that
              it can be nerve racking to entrust your home to strangers. Good,
              dependable, and trustworthy service is what we would expect, so we
              give you exactly that.
            </p>
          </IntroComp>
          <ServicesComp
            services={floodServices}
            heading="Stages of Water Damage Repair"
          />
          <ReviewsComp />
          <RisksComp heading="Risks of Water Damage and Flood Damage">
            <p>
              In most water damage cases, much of the damage will exist under or
              inside of building components such as walls and flooring. Severe
              water damage can lead to discoloration in carpeting, furniture,
              walls, and wood flooring. Musty odors are usually accompanied by
              significant bacterial and mold growth. Structural components may
              begin to soften from lack of proper drying processes, causing rot
              and decay.
            </p>
            <p>
              Water Damage from any source can turn your home upside down for
              what feels like forever, but water damage that is left untreated
              can cause long term problems and expensive repairs down the road.
              Insurance may also deny a future claim if it is discovered the
              problem was not mitigated properly in a timely manner.
            </p>
            <p>
              Getting assistance quickly from a trustworthy restoration company
              near you is critical to saving your home from the more serious
              repercussions of water damage. Fast response time is exactly what
              you need and Flood & Fire Solutions is proven fast and reliable.
            </p>
            <p>
              We work with your insurance company to help you minimize the cost
              of repairs, we help you work with your mortgage company who wants
              to see their assets taken care of, and everyone at Flood & Fire
              Solutions wants to get you back to normal life as quickly as
              possible.
            </p>
          </RisksComp>
          <InsuranceComp />
          <ContactUsComp />
        </div>
      </div>
    </Page>
  );
}
