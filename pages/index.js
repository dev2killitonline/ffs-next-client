import Head from "next/head";
import Page from "../components/Page";
import HomeBanner from "../components/views/Home/components/HomeBanner";
import InsuranceComp from "../components/shared/Insurance/InsuranceComp";
import ContactUsComp from "../components/shared/Contact/ContactUsComp";
import LocationComp from "../components/shared/Contact/LocationComp";
import SectionComp from "../components/shared/Section/SectionComp";
import CallNowRibbon from "../components/shared/CallNowRibbon/CallNowRibbon";
import ServiceHighlights from "../components/shared/ServiceHighlights/ServiceHighlights";
import LocationsServed from "../components/shared/LocationsServed/LocationsServed";
import HomeFAQ from "../components/views/Home/components/HomeFAQ";

import ReviewsComp from "../components/shared/Reviews/ReviewsComp";
export default function Home() {
  return (
    <Page>
      <Head>
        <title>
          Flood & Fire Solutions - Your Certified Idaho Restoration Pros 
        </title>
        <meta
          name="description"
          content="Ready to save your home or business 24/7. 700+ properties saved from water damage, mold, fire and smoke. Questions? Call Flood & Fire Solutions 24/7."
        />
        <meta
          property="og:title"
          content="Flood & Fire Solutions - Your Certified Idaho Restoration Pros"
        />
        <meta
          property="og:description"
          content="Ready to save your home or business 24/7. 700+ properties saved from water damage, mold, fire and smoke. Questions? Call Flood & Fire Solutions 24/7."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.floodandfiresolutions.com"
        />
        <link rel="canonical" href="https://floodandfiresolutions.com" />
      </Head>
      <HomeBanner />
      <section className="page__container">
        <SectionComp heading="The Best Disaster Restoration Company Near You">
          <p>
            Flood & Fire Solutions is a restoration company that repairs
            property damage from water, fire, mold, and biohazards. We are based
            out of Idaho Falls and serve all of Southeast Idaho.
          </p>
          <p>
            Disasters affecting your home are time sensitive, so we make
            ourselves available 24/7 to help return your home to its original
            safety and comfort. Flood & Fire Solutions is experienced in
            everything from water damage mitigation and cleanup to extensive
            rebuilds, doing so professionally while being as minimally invasive
            as possible. Years of experience working alongside insurance
            companies assures we get your family or business back on its feet.
          </p>
          <p>
            Water damage, smoke damage, mold growth, or crime scenes: No matter
            the type of restoration work you may need, you can rest assured that
            Flood & Fire Solutions is the restoration company you can trust from
            start to finish. Just ask our customers who gave us a rating of
            4.9/5.
          </p>
        </SectionComp>
      </section>
      <CallNowRibbon />
      <LocationsServed />
      {/* <HomeHighlights /> */}
      <ReviewsComp />
      <ServiceHighlights />

      {/* <HomeIceDam /> */}
      <HomeFAQ />
      <InsuranceComp />
      <ContactUsComp />
      <LocationComp />
    </Page>
  );
}
