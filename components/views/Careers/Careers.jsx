import React from "react";
// import { usePageView } from '../../../services/CustomHooks';
import Helmet from "react-helmet";
import ContentAccessBar from "../../shared/ContentAccessBar/ContentAccessBar";
import IntroComp from "../../shared/Intro/IntroComp";
import BannerComp from "../../shared/Banner/BannerComp";
import image from "../../../images/1280x820.jpg";

function Careers({ location }) {
  // usePageView(location.pathname);
  return (
    <main className="careers">
      <Helmet>
        <title>Flood & Fire Solutions │Restoration Company</title>
      </Helmet>
      <BannerComp
        image={image}
        headingText="Join our ream"
        subheadingText="We are looking for motivated mitigation specialists"
        buttonText="Apply Now"
        link={"mailto:careers@floodandfiresolutions.com"}
      />
      <div className="grid careers__container">
        <ContentAccessBar className="col--12 col--med--3" location={location}>
          {(contentToggle, setContentToggle) => (
            <div className="access-bar__group">
              <a
                href="#interested-in-working-with-flood-and-fire-solutions?"
                onClick={() => {
                  setContentToggle(!contentToggle);
                }}
                className="access-bar__group-h2"
              >
                Working With Flood & Fire
              </a>
            </div>
          )}
        </ContentAccessBar>
        <section className="col--12 col--med--9">
          <IntroComp heading="Interested In Working With Flood And Fire Solutions?">
            <p>
              Working for Flood and Fire Solutions is a very rewarding
              experience. Click the button bellow to send us an email with your
              resume and a cover letter!
            </p>
          </IntroComp>
        </section>
      </div>
    </main>
  );
}

export default Careers;
