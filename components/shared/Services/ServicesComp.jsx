import React from "react";
import Services from "../../../services/services";
import Service from "./Service";

function ServicesComp({ services = [], heading }) {
  return (
    <section className="services-comp">
      <h2 className="txt-primary">{heading}</h2>
      <ul>
        {services.map((service, index) => {
          return <Service key={index} service={service} />;
        })}
      </ul>
    </section>
  );
}

export default ServicesComp;
