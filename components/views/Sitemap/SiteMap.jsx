import React from "react";
// import { usePageView } from '../../../services/CustomHooks';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function SiteMap({ location }) {
  // usePageView(location.pathname);
  return (
    <main className="sitemap">
      <Helmet>
        <title>Sitemap | Flood & Fire Premium Cleaning & Restoration</title>
        <meta
          name="description"
          content="Sitemap to the core webpages on the flood & fire solutions website."
        />
      </Helmet>
      <section className="format-text">
        <h1>Flood & Fire Solutions Sitemap</h1>
      </section>
      <section className="sitemap__container">
        <Link className="sitemap__link--parent" to="/">
          Home
        </Link>
        <Link className="sitemap__link--child" to="/fire">
          Fire
        </Link>
        <Link className="sitemap__link--child" to="/flood">
          Flood
        </Link>
        <Link className="sitemap__link--child" to="/mold">
          Mold
        </Link>
        <Link className="sitemap__link--child" to="/bed-bugs">
          Bed Bugs
        </Link>
        <Link className="sitemap__link--child" to="/biohazards">
          Biohazards
        </Link>
        <Link className="sitemap__link--child" to="/insurance">
          Insurance
        </Link>
        <Link className="sitemap__link--child" to="/case-study/dawn-kelly">
          Insurance
        </Link>
        <Link className="sitemap__link--child" to="/contact">
          Contact
        </Link>
        <Link className="sitemap__link--child" to="/about-us">
          About Us
        </Link>
        <Link className="sitemap__link--child" to="/terms-of-use">
          Terms Of Use
        </Link>
        <Link className="sitemap__link--child" to="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className="sitemap__link--child" to="/sitemap">
          Sitemap
        </Link>
      </section>
    </main>
  );
}

export default SiteMap;
