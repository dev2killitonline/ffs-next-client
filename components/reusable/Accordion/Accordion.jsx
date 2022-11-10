import { useState } from "react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion__container">
      {items.map((item, index) => (
        <div
          className={`accordion__drawer ${open === index ? "open" : ""}`}
          key={index}
        >
          <div
            className="accordion__title"
            onClick={() => setOpen((prev) => (prev === index ? false : index))}
          >
            <img
              alt="Accordion Direction Indicator"
              height="15px"
              width="15px"
              src={
                open === index
                  ? "/images/icons/chevron-down-black.svg"
                  : "/images/icons/chevron-right-black.svg"
              }
            />
            {item.title}
          </div>
          <article
            className={`accordion__content ${open === index ? "open" : ""}`}
          >
            {item.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </article>
        </div>
      ))}
    </div>
  );
}
