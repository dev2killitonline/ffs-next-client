import React from "react";
import Services from "../../../services/services";

function RisksComp({ heading, children }) {
  return (
    <section className="risks-comp format-text">
      <h2 className="txt-primary">{heading}</h2>
      {children}
    </section>
  );
}

export default RisksComp;
