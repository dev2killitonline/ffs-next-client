import React from "react";

function Button(props) {
  return (
    <button
      title={props.title || null}
      onClick={props.click || null}
      className={props.className || "btn"}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export default Button;
