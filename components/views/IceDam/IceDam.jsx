import React, { useContext } from "react";
// import { usePageView } from "../../../services/CustomHooks";

// PAGE COMPONENTS
import Helmet from "react-helmet";
import BannerComp from "../../shared/Banner/BannerComp";
import InsuranceComp from "../../shared/Insurance/InsuranceComp";
import ContactUsComp from "../../shared/Contact/ContactUsComp";

// PAGE MEDIA
import FloodVideo from "../../../video/High Water - 14324.mp4";
import ContentAccessBar from "../../shared/ContentAccessBar/ContentAccessBar";
import ServicesComp from "../../shared/Services/ServicesComp";
import IntroComp from "../../shared/Intro/IntroComp";
import Reviews from "../../shared/Reviews/ReviewsComp";
import RisksComp from "../../shared/Risks/RisksComp";
import { StateContext } from "../../../App";
import HomeServices from "../Home/components/HomeServices";
import IICRC from "../../../images/Certificates/IICRC.png";

export default function IceDam(props) {
  const { floodReviews, floodServices } = useContext(StateContext);
  // usePageView(props.location.pathname);

  return (
    <main className="ice-dam">
      <Helmet>
        <title>Flood & Fire Solutions │ Restoration Company</title>
        <meta
          name="description"
          content="Even after a water damage has occured hazards still exist that could cause personal or property injury. Flood & Fire Solutions provides emergency water damage cleanup and restoration services so that your life can return to normalcy."
        />
      </Helmet>

      <BannerComp
        video={FloodVideo}
        headingText="Flood and Water Damage Restoration"
        subheadingText="Emergency Water Damage Cleanup Services With Quick 24/7 Response"
        buttonText="Call Us Now - 24/7"
      />

      <div className="grid ice-dam__container">
        <ContentAccessBar
          className="col--12 col--med--3"
          location={props.location}
        >
          {(contentToggle, setContentToggle) => (
            <div className="access-bar__group">
              <a
                href="#don't-stress!-we-are-here-to-help"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h2"
              >
                Don't Stress! We Are Here To Help
              </a>
              <a
                href="#water-damage-restoration-services"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h2"
              >
                Water Damage Restoration Services
              </a>
              <a
                href="#inspection"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h3"
              >
                Inspection
              </a>
              <a
                href="#demolition"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h3"
              >
                Demolition
              </a>
              <a
                href="#dryout"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h3"
              >
                Dryout
              </a>
              <a
                href="#rebuild"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h3"
              >
                Rebuild
              </a>
              <a
                href="#hardwood-restoration"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h3"
              >
                Hardwood Restoration
              </a>
              <a
                href="#water-damage-reviews"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h2"
              >
                Water Damage Reviews
              </a>
              <a
                href="#risks-of-flood-and-water-damage"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h2"
              >
                Risks Of Flood and Water Damage
              </a>
              <a
                href="#insurance-coverage"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h2"
              >
                Insurance Coverage
              </a>
              <a
                href="#contact-us"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h2"
              >
                Contact Us
              </a>
            </div>
          )}
        </ContentAccessBar>
        <section className="col--12 col--med--9">
          <IntroComp
            heading="Don't Stress! We Are Here To Help"
            videoSrc={FloodVideo}
            videoType="local"
            videoCaption="Everything from small floods to large leaks can effect the structural integrity of your home."
          >
            <p>
              Having a flood invade your home can be devastating. It is really
              hard to see your furniture, belongings, home decor, and your
              personal space destroyed. Above all, the feeling that your home is
              no longer safe and clean can be overwhelming.
            </p>
          </IntroComp>
          <ServicesComp
            services={floodServices}
            heading="Water Damage Restoration Services"
          />
          <Reviews
            heading="Water Damage Reviews"
            reviews={floodReviews}
            linkId={"flood-reviews"}
          />
          <RisksComp heading="Risks Of Flood and Water Damage">
            <p>
              Severe flood damage can lead to a wide array of unpleasant
              effects. It can cause discoloration in carpeting, furniture,
              walls, and wood flooring. Musty odors are usually accompanied by
              significant bacterial and mold growth. Structural components can
              soften from lack of proper drying due to rot and decay. More times
              than not, most of the damage exists under or inside of building
              components such as walls.
            </p>
            <p>
              Getting help quickly from a trustworthy flood restoration company
              in Idaho Falls is critical to a successful outcome. Proven, fast
              response time is exactly what Flood and Fire Solutions brings to
              your home or business.{" "}
            </p>
            <p>
              Water damage of any magnitude can be overwhelming. However,
              everybody has an interest in getting you back on your feet. Your
              mortgage company wants to see their asset taken care of, your
              insurance company wants to minimize the cost of repairs to your
              property, and Flood and Fire Solutions wants to get you back to
              normal as quickly as possible. If you fail to get prompt flood
              restoration assistance from properly trained certified
              professionals, you could be putting your health and your
              property's value at risk.
            </p>
          </RisksComp>
          <InsuranceComp />
          <HomeServices />
          <ContactUsComp />
        </section>
      </div>
    </main>
  );
}
