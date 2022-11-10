import React from "react";
import Link from "next/link";
const moldImg = "/images/moldBanner.jpg";
const biohazardImg = "/images/services/biohazards.jpg";

function HomeServices() {
  /**
   * For the life of me I could not import the biohazard image into this inline css
   * had to take the source from the compiled version and it works. We will need
   * to make sure it works after production.
   * -Matthew
   */
  const styles = {
    background: `linear-gradient(45deg, rgba(4, 4, 4, 0.3), rgba(4, 4, 4, 0.3)), url(${biohazardImg})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };

  const moldStyles = {
    background: `linear-gradient(45deg, rgba(4, 4, 4, 0.3), rgba(4, 4, 4, 0.3)), url(${moldImg})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };

  return (
    <section className=" home-services">
      <div className="home-services__container">
        <h2 className="home-services__title txt-primary">Our Services</h2>
        <div className="home-services__container">
          <Link href="/flood">
            <a className="home-services__section water-service__background">
              <h3 className="home-services__section-title">Flood</h3>
            </a>
          </Link>
          {/* <Link
            className="home-services__section ice-dam-service__background"
            href="/ice-dam"
          >
            <h3 className="home-services__section-title">Ice Dam</h3>
          </Link> */}
          <Link href="/fire">
            <a className="home-services__section fire-service__background">
              <h3 className="home-services__section-title">Fire</h3>
            </a>
          </Link>
          <Link href="/mold">
            <a
              style={moldStyles}
              className="home-services__section mold-service__background"
            >
              <h3 className="home-services__section-title">Mold</h3>
            </a>
          </Link>
          <Link href="/bed-bugs">
            <a className="home-services__section bugs-service__background">
              <h3 className="home-services__section-title">Bed Bugs</h3>
            </a>
          </Link>
          <Link href="/biohazards">
            <a
              style={styles}
              className="home-services__section bio-service__background"
            >
              <h3 className="home-services__section-title">Biohazard</h3>
            </a>
          </Link>
          <Link href="/animal">
            <a className="home-services__section animal-service__background">
              <h3 className="home-services__section-title">Animal</h3>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
