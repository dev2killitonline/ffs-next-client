/**
 * Needs to have a video title and block of text
 */
import React from "react";
import Services from "../../../services/services";

function IntroComp({
  children,
  heading,
  videoSrc,
  videoType = "local",
  videoCaption = "",
}) {
  return (
    <section className="intro">
      {heading ? (
        <h2 className="intro__heading txt-primary">{heading}</h2>
      ) : null}
      <figure className="intro__figure">
        {videoSrc ? (
          <div className="intro__video-section">
            <div className="intro__video-container">
              {videoType === "local" ? (
                <video className="intro__video--src" src={videoSrc} controls />
              ) : (
                ""
              )}
              {videoType === "embed" ? videoSrc : ""}
            </div>
            <p className="intro__video-caption">{videoCaption}</p>
          </div>
        ) : (
          ""
        )}
        <figcaption className="intro__content">{children}</figcaption>
      </figure>
    </section>
  );
}

export default IntroComp;
