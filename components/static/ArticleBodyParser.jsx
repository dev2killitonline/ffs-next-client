import React, { Fragment } from "react";
import { urlFor } from "../../lib/sanity";

export default function ArticleBodyParser({ body }) {
  return (
    <>
      {body.map((item, index) => {
        switch (item.style) {
          case "normal":
            return;
          case "h1":
            return <h1 key={index}>{item.children[0].text}</h1>;
          case "h2":
            return <h2 key={index}>{item.children[0].text}</h2>;
          case "h3":
            return <h3 key={index}>{item.children[0].text}</h3>;
          case "h4":
            return <h4 key={index}>{item.children[0].text}</h4>;
          case "normal":
            return (
              <Fragment key={index}>
                {item.children.map((child, cIndex) => (
                  <p key={cIndex}>{child.text}</p>
                ))}
              </Fragment>
            );
          default: {
            if (item._type === "image") {
              return <img src={urlFor(item)} />;
            } else {
              return null;
            }
          }
        }
      })}
    </>
  );
}
