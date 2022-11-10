import React from "react";
import Link from "next/link";
const BBB = "/images/webp/BBB-compressed.webp";
const EPA = "/images/webp/EPA-compressed.webp";
const IICRC = "/images/webp/IICRC-compressed.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section-container">
        <section className="footer__section">
          <h3 className="footer__list-title">Site</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link href="/">
                <a className="footer__link">Home</a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/flood">
                <a className="footer__link">Flood</a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/fire">
                <a className="footer__link">Fire</a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/mold">
                <a className="footer__link">Mold</a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/insurance">
                <a className="footer__link">Insurance</a>
              </Link>
            </li>
            {/* <li className="footer__item">
              <Link href="/sitemap">
                <a className="footer__link">Sitemap</a>
              </Link>
            </li> */}
          </ul>
        </section>
        <section className="footer__section">
          <h3 className="footer__list-title">Company</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link href="/about">
                <a className="footer__link">About Us</a>
              </Link>
            </li>
            {/* <li className="footer__item">
              <Link href="/careers">
                <a className="footer__link">Careers</a>
              </Link>
            </li> */}
            <li className="footer__item">
              <a
                href="https://www.floodandfirejackson.com"
                className="footer__link"
                to="/"
                rel="noopener noreferrer"
              >
                Jackson
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.floodandfiresolutions.com"
                className="footer__link"
                rel="noopener noreferrer"
              >
                Idaho Falls
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__section">
          <h3 className="footer__list-title">Legal</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link href="/privacy-policy">
                <a className="footer__link">Privacy Policy</a>
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href="/terms-of-use">
                <a className="footer__link">Terms of Use</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="footer__section">
          <h3 className="footer__list-title">Connect</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                className="footer__link"
                // onClick={() => Services.trackEvent("contact", "click", "call")}
                href="tel:2085219741"
                rel="noopener noreferrer"
              >
                <i className="fas fa-phone footer__link-icon" /> Contact
              </a>
            </li>
            {/* <li className="footer__item"><Link className="footer__link" to="/">Blog</Link></li> */}
            <li className="footer__item">
              <a
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
                // onClick={() =>
                //   Services.trackEvent("social", "click", "Facebook")
                // }
                href="https://www.facebook.com/floodandfiresolutions/"
              >
                <i className="fab fa-facebook-f footer__link-icon"></i> Facebook
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
                // onClick={() =>
                //   Services.trackEvent("social", "click", "youtube")
                // }
                href="https://www.youtube.com/channel/UC_2cfZt74DL6DHXliGbdBzQ"
              >
                <i className="fab fa-youtube footer__link-icon" /> YouTube
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                target="_blank"
                // onClick={() =>
                //   Services.trackEvent("social", "click", "instagram")
                // }
                rel="noopener noreferrer"
                href="https://www.instagram.com/floodandfire_solutions/"
              >
                <i className="fab fa-instagram footer__link-icon" /> Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>
      <section className="footer__section--certifications">
        <ul className="footer__list--certifications">
          {/* <li className="footer__item">
            <img src={BBB} alt="Accredited Business" />
          </li> */}
          <li className="footer__item">
            <img
              src={IICRC}
              alt="Institute Of Inspection Cleaning And Restoraction Certification"
            />
          </li>
          <li className="footer__item">
            <img
              src={EPA}
              alt="United States Enviornmental Protection Agency"
            />
          </li>
        </ul>
      </section>
      <ul className="footer__fine-print">
        <li className="footer__fine-print-item">
          Copyright &copy; {new Date().getFullYear()}
        </li>
        <li className="footer__fine-print-seperator">|</li>
        <li className="footer__fine-print-item"> Flood & Fire Solutions</li>
        <li className="footer__fine-print-seperator">|</li>
        <li className="footer__fine-print-item">All Rights Reserved</li>
      </ul>
    </footer>
  );
}

export default Footer;
