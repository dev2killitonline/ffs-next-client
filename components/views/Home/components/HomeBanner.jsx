import React from "react";
import RhombusBar from "../../../shared/RhombusBar/RhombusBar";

function HomeBanner() {
  return (
    <section className="home-banner">
      <div className="home-banner__content">
        <div className="home-banner__action-group">
          <div className="home-banner__action">
            <h1 className="home-banner__action-title">
              YOUR LOCAL WATER DAMAGE RESTORATION COMPANY
            </h1>
            <ul className="home-banner__list">
              <li>✓ Idaho Falls, Ammon, Shelley & all of East Idaho </li>
              <li>✓ IICRC certified technicians available 24/7 </li>
              <li>✓ Voted #1 Restoration Company in East Idaho </li>
              <li>✓ 4.9/5 Rating From Our Customers</li>
              <li>✓ Residential & Commercial Restoration</li>
            </ul>
            <a
              href="tel:208-521-9741"
              rel="noopener noreferrer"
              title="Call Us Now"
              className="home-banner__rating-action__button"
            >
              CALL US 24/7 | (208) 521-9741
            </a>
            <p className="home-banner__sub-btn-text">
              750+ Homes & Businesses Saved Since 2013
            </p>
          </div>
        </div>
      </div>
      <div className="home-banner__rhombus-bar">
        <RhombusBar
          items={[
            {
              title: "Water Damage",
              href: "/flood",
              img: "/images/water-damage-img.jpg",
              icon: "/images/icons/water-white.svg",
            },
            {
              title: "Fire & Smoke",
              href: "/fire",
              img: "/images/fire-smoke-img.jpg",
              icon: "/images/icons/fire-white.svg",
            },
            {
              title: "Mold",
              href: "/mold",
              img: "/images/mold-img.jpg",
              icon: "/images/icons/mold-white.svg",
            },
            {
              title: "Biohazard",
              href: "/biohazards",
              img: "/images/biohazard-img.jpg",
              icon: "/images/icons/police-white.svg",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default HomeBanner;
