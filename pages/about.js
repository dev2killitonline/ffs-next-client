import Head from "next/head";
import Page from "../components/Page";
import State from "../services/state";
import TeamComp from "../components/shared/AboutUs/TeamComp";
import ContactUsComp from "../components/shared/Contact/ContactUsComp";
import IntroComp from "../components/shared/Intro/IntroComp";
import OurTeam from "../components/views/AboutUs/Components/OurTeam";

const { aboutuscontentimage } = State;
export default function About() {
  const style = {
    backgroundImage:
      "linear-gradient(45deg, rgba(4, 4, 4, 0.2), rgba(4, 4, 4, 0.2)), url(" +
      aboutuscontentimage +
      ")",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };
  return (
    <Page>
      <Head>
        <title>About Us - Flood & Fire Solutions</title>
        <meta
          name="description"
          content="Flood & Fire Solutions has saved hundreds of homes and businesses across Idaho from water, fire, mold, and all types of disasters. Learn more."
        />
        <link rel="canonical" href="https://floodandfiresolutions.com/about" />
      </Head>
      <div className="about-us">
        {/* <BannerComp
            image = {aboutuscontentimage}
            buttonText="Call Us Now - 24/7" /> */}

        <section style={style} className="banner-comp" />

        <div className="page__container">
          {/* <CallNowBanner /> */}
          <IntroComp heading="About Us">
            <p>
              Flood and Fire Solutions was founded after our owner, Brando
              Morgan, experienced a disaster. This was a devastating experience
              for Brando, but it opened his eyes to the opportunity to help
              others in similar situations. That's why we opened our doors in
              2013. Our expert technicians provide over a century of combined
              construction experience and several highly-esteemed
              certifications. It is our mission to provide urgent relief during
              sensitive times for all of our customers.
            </p>
          </IntroComp>
          <TeamComp />
          <OurTeam />
          <ContactUsComp />
        </div>
      </div>
    </Page>
  );
}
