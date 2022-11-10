import React from "react";

/**
 * Remember that inside of the banner component is the h1 of the page.
 * This needs to contain the target keyword for the page.
 */

function BannerComp({
  image,
  link,
  headingText,
  subheadingText,
  buttonText,
  video,
  animation = false,
  position = "center",
  background,
}) {
  return (
    <section className={`banner-comp ${background || ""}`}>
      {video !== undefined ? (
        <>
          <video
            src={video}
            className="banner-comp__video"
            playsInline
            muted
            autoPlay
            loop
          />
          <div className="banner-comp__video-gradient" />
        </>
      ) : (
        ""
      )}

      <div className="banner-comp__content">
        <h1>{headingText}</h1>
        {subheadingText ? <h2>{subheadingText}</h2> : ""}
        {buttonText ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link ? link : "tel:208-521-9741"}
            className="bt-action-call btn inline-block txt-med"
          >
            {buttonText}
          </a>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default BannerComp;
