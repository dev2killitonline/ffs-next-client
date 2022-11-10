import React from "react";

function ContactUsComp() {
  return (
    <section className="contact-us__container">
      <h2 className="contact-us__heading txt-primary">
        Contact Flood & Fire Solutions
      </h2>

      <div className="contact-us__now-section">
        <figure className="contact-us__now call-contact__background">
          <h3 className="txt-medlrg">
            No Matter The Disaster, <br />
            Call Us 24/7{" "}
          </h3>
          <p className="txt-sml">
            One call and that’s all. We are available via phone 24/7.
          </p>
          <a
            className="contact-us__now-btn btn bt-action-call inline-block txt-sml"
            href="tel:2085219741"
            rel="noopener noreferrer"
            // onClick={() => Services.trackEvent("contact", "click", "call")}
          >
            (208) 521-9741
          </a>
        </figure>

        <figure className="contact-us__now book-contact__background">
          <h3 className="txt-medlrg">
            Book An Online <br /> Appointment
          </h3>
          <p className="txt-sml">
            Not an emergency? Book an appointment with one of our experts.
          </p>
          <a
            // onClick={() => Services.trackEvent("contact", "click", "email")}
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKdp99-wBmxQJCdLLKsHRCpS3dAjh706XG-TGx1tTp8522Rw/viewform?usp=sf_link"
            className="contact-us__now-btn btn bt-action-call inline-block txt-sml"
          >
            Schedule Now
          </a>
        </figure>
      </div>
    </section>
  );
}

export default ContactUsComp;
