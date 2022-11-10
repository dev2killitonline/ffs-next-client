import React from "react";
import Services from "../../../services/services";

function SectionComp({ heading, children, className }) {
  return (
    <section className={className ? "section " + className : "section"}>
      <h2 className="section__heading txt-primary txt-xlrg">{heading}</h2>
      <div className="section__content">{children}</div>
    </section>
  );
}

export default SectionComp;
