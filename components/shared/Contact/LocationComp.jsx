import React from "react";

function LocationComp() {
  return (
    <section className="contact-us__container">
      <div className="contact-us__content">
        <div className="contact-us__map-section">
          <a
            href="https://goo.gl/maps/TDR2fv6G7YjTpYrX9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-us__map-container">
              <img
                className="contact-us__map"
                src="/images/webp/map-location-compressed.webp"
                alt="Flood & Fire Map Location Image"
              />
            </div>
          </a>
        </div>

        <div className="contact-us__info">
          <h3>Location</h3>
          <a
            href="https://goo.gl/maps/TDR2fv6G7YjTpYrX9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <address className="contact-us__address">
              570 W 19th Street
              <br />
              Idaho Falls, ID 83402
            </address>
          </a>

          <h3>Social Media</h3>
          <div className="contact-us__social-links">
            <a
              href="https://www.facebook.com/floodandfiresolutions/"
              // onClick={() => Services.trackEvent('social', 'click', 'facebook')}
              className="contact-us__link btn--round bt-facebook"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Facebook page!"
            >
              <img src="/images/icons/facebook-white.svg" alt="Facebook logo" />
            </a>

            <a
              href="https://www.youtube.com/channel/UC_2cfZt74DL6DHXliGbdBzQ"
              // onClick={() => Services.trackEvent('social', 'click', 'youtube')}
              className="contact-us__link btn--round bt-youtube"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit the YouTube Channel!"
            >
              <img src="/images/icons/youtube-white.svg" alt="Youtube logo" />
            </a>

            <a
              href="https://www.instagram.com/floodandfire_solutions/"
              // onClick={() => Services.trackEvent('social', 'click', 'instagram')}
              className="contact-us__link btn--round bt-instagram"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Instagram!"
            >
              <img
                src="/images/icons/instagram-white.svg"
                alt="Instagram Logo"
              />
            </a>
          </div>

          <h3>Email Us</h3>

          <a
            href="mailto:admin@floodandfiresolutions.com"
            className="contact-us__email"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Contact Link"
          >
            <img src="/images/icons/mail-white.svg" alt="Email Icon" /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
export default LocationComp;
