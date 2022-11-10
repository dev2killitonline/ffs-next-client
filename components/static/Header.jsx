import React, { useState } from "react";
import Nav from "./Nav";
import Link from "next/link";

function Header() {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
  }

  
  return (
    <header className={`header ${toggle ? "fixed" : ""}`}>
      <div className="header__container">
        <Link href="/">
          {/* <i className="fas fa-house-damage header__logo-icon" /> */}
          <a className="header__logo">
            <img
              src="/images/logo-small-compressed.png"
              className="header__logo-icon"
              alt="Flood and Fire Solutions logo"
              layout="fill"
            />
            <img
              className="header__logo-text show-at-med hide-at-sml "
              src="/images/logo-words-compressed.png"
              alt="Flood and Fire Solutions Text"
              layout="fill"
            />
          </a>
        </Link>
        <div
          className={`header__toggle ${toggle ? "open" : ""}`}
          onClick={toggleNav}
        >
          <span className="header__toggle-bars" />
        </div>
      </div>
      <Nav toggle={toggle} toggleNav={toggleNav}></Nav>
    </header>
  );
}

export default Header;
