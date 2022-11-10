import React from "react";
import Services from "../../../services/services";

function Review({ showReview, review, index }) {
  return (
    <div key={index} className={`home-review__link ${showReview(index)}`}>
      <figure className="home-review">
        <figcaption className="home-review__text">
          "{Services.limitCharacters(review.textReview, 190) + "..."}"
        </figcaption>
        <div className="home-review__reviewer">
          <div className="home-review__info">
            <span className="home-review__name">- {review.reviewer}</span>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default Review;
