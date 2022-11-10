import React, { useEffect, useState, useContext } from "react";
import { useInterval } from "../../../services/CustomHooks";
import State from "../../../services/state";
const { insuranceArray } = State;
/**
 * This is a one-off none-reusable component
 * that bears resemblance to the banner component
 */
function InsuranceBanner() {
  return (
    <section className="insurance-banner">
      <div className="insurance-banner__content">
        <h1>You Are Covered</h1>
        <h2>We work with all major insurance providers.</h2>
        <div className="insurance-banner__image-container">
          <img
            className="insurance-banner__image"
            src="/images/webp/insurance-logos-compressed.webp"
            alt="Insurance Logos"
          />
        </div>
        <a
          href="tel:5417143099"
          className="bt-action-call btn inline-block txt-med"
        >
          Call Us Now 24/7
        </a>
      </div>
    </section>
  );
}

export default InsuranceBanner;
