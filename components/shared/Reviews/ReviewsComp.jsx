import React from "react";
import Script from "next/script";

function ReviewsComp() {
  return (
    <section className="home-reviews">
      <div className="embeded-reviews">
        <div data-embed-placeholder="9003">
          <Script
            strategy="afterInteractive"
            src="https://www.local-marketing-reports.com/external/showcase-reviews/embed/2838c242529e3dc6f1821f74821b8b663565dff3?id=9003"
          ></Script>
        </div>
      </div>
    </section>
  );
}

export default ReviewsComp;
