import { useEffect, useState } from "react";
import Services from "../../../services/services";

function ContentAccessBar({ children, className }) {
  const [contentToggle, setContentToggle] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setTitle(
        Services.formateAccessBarTitle(window ? window.location.hash : "") ||
          Services.formateAccessBarTitle(window ? window.location.pathname : "")
      );
    }
  }, [contentToggle]);

  return (
    <aside className={`access-bar ` + className}>
      <header className="access-bar__header">
        <span className="access-bar__location">{title}</span>
        <div
          className="access-bar__toggle txt-medlrg hide-at-med"
          onClick={() => setContentToggle(!contentToggle)}
        >
          <i className="fas fa-ellipsis-v access-bar__toggle-icon"></i>
        </div>
      </header>
      <section className={`access-bar__content ${contentToggle ? "open" : ""}`}>
        {/* {React.Children.map(children, child => {
                    console.log("child");
                    return React.cloneElement(child, {contentToggle, setContentToggle});
                })} */}
        {children(contentToggle, setContentToggle)}
        {/* {React.cloneElement(children, {contentToggle, setContentToggle})} */}
      </section>
    </aside>
  );
}

export default ContentAccessBar;
