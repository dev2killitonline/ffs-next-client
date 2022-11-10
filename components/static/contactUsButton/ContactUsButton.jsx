import React, { useState } from "react";
import Services from "../../../services/services";

function ContactUsButton() {
  return (
    <aside>
      {/* <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeKdp99-wBmxQJCdLLKsHRCpS3dAjh706XG-TGx1tTp8522Rw/viewform?usp=sf_link"
        // onClick={() => Services.trackEvent("contact", "click", "contact form")}
        target="_blank"
        title="Book an online appointment now."
        className={`btn--round bg-white txt-burg contact-us-button-form show-at-sml box-shadow`}
      >
        <i className="fas fa-file-alt contact-us-button__icon" />
      </a> */}
      <a
        href="tel:208-521-9741"
        title="Give us a call now."
        // onClick={() => Services.trackEvent("contact", "click", "call")}
        className={`contact-us-button box-shadow`}
      >
        <img className={`contact-us-button__icon`} src="/images/icons/phone-outline-white.svg" alt="Contact Us" height={25} width={25}/>
      </a>
    </aside>
  );
}

export default ContactUsButton;
