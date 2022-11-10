import React, { useState } from "react";
import Services from "../../../services/services";

function Service({ service: { title, description, paragraphs = [] } }) {
  return (
    <li className="service">
      <header className="service__header">
        <h3>{title}</h3>
      </header>
      {description ? <p>{description}</p> : null}
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </li>
  );
}

export default Service;
