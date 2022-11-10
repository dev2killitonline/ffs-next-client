import React from "react";

function HomeFree() {
  return (
    <section className="home-free__container">
      <h2 className="home-free__heading ">Free Consultations</h2>
      <ul className="home-free__list">
        <li className="home-free__list-item">
          {/* <i className="fas fa-star home-free__list-icon"></i> */}
          <span className="home-free__list-text">Free Phone Consultations</span>
        </li>
        <li className="home-free__list-item">
          {/* <i className="fas fa-star home-free__list-icon"></i> */}
          <span className="home-free__list-text">Free Inspection</span>
        </li>
        <li className="home-free__list-item">
          {/* <i className="fas fa-star home-free__list-icon"></i> */}
          <span className="home-free__list-text">
            Free Water & Moisture Checks
          </span>
        </li>
        <li className="home-free__list-item home-free__show-conditionally">
          {/* <i className="fas fa-star home-free__list-icon"></i> */}
          <span className="home-free__list-text ">
            Free Restoration Assessments
          </span>
        </li>
        <li className="home-free__list-item">
          {/* <i className="fas fa-star home-free__list-icon"></i> */}
          <span className="home-free__list-text">Free Ice Dam Inspection</span>
        </li>
      </ul>
      {/* <p className="home-free-signoff txt-tiny">
        *We understand floods can be hard
      </p> */}
    </section>
  );
}

export default HomeFree;
