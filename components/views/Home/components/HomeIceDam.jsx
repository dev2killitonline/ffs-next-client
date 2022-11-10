import React from "react";
// import icedam from '../../../../images/ice-dam.png';
// import icedam1 from '../../../../images/ice-dam-1.png';
const hosebib = "/images/hosebib.png";

function HomeIceDam() {
  return (
    <div className="home-ice-dam__cont">
      <h2 className="home-ice-dam__h2 txt-xlrg">
        Unexpected spring flooding? We can help!
      </h2>
      <img
        src={hosebib}
        alt="from a leak to a flood"
        className="home-ice-dam__img"
      />
      <p className="home-ice-dam__p">
        During Springtime it is common for hose bibs and sprinkler lines to
        cause flooding. This is due to the tiny fractures that occured during
        the winter months. Common side effects of this problem are indoor
        leaking, flooded cellar windows, and foundation leaks. Don't let a small
        leak turn into a major flood! Call us right away.
      </p>
    </div>
  );
}

export default HomeIceDam;
