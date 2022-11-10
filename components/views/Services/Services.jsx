import React from "react";
import HomeServices from "../Home/components/HomeServices";
import ContactUsComp from "../../shared/Contact/ContactUsComp";
import LocationComp from "../../shared/Contact/LocationComp";
import { Helmet } from "react-helmet";
// import { usePageView } from '../../../services/CustomHooks';

function Services(props) {
  // usePageView(props.location.pathname)
  return (
    <main style={{ position: "relative", minHeight: "calc(100vh - 60px)" }}>
      <Helmet>
        <title>Flood & Fire Solutions │ Restoration Company</title>
        <meta
          name="description"
          content="Flood & Fire Solutions provides Cleaning & Restoration services for a variety of disasters, including water and flood damage, fire, mold & more in Idaho Falls, ID. Call Us 24/7 at (208) 524-9741."
        />
      </Helmet>
      <HomeServices />
      <ContactUsComp />
      <LocationComp />
    </main>
  );
}

export default Services;
