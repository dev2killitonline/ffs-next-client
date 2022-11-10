import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
const waterIcon = "/images/icons/water-black.svg";
const fireIcon = "/images/icons/fire-black.svg";
const moldIcon = "/images/icons/mold-black.svg";
const biohazardIcon = "/images/icons/police-black.svg";

function Nav({ toggle, toggleNav }) {
  return (
    <nav className={`nav ${toggle ? "open" : ""}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <ActiveLink href="/" onClick={toggleNav}>
            Home
          </ActiveLink>
        </li>
        <li className="nav__item">
          <ActiveLink>
            Services &nbsp;&nbsp;
            <img
              width="15px"
              height="15px"
              src="/images/icons/chevron-down-black.svg"
              className="nav__sub-list-icon"
              alt="Dropdown Indicator Icon"
            />
            <div className="nav__sub-list-wrapper">
              <ul className="nav__sub-list open">
                <li className="nav__sub-item">
                  <Link href="/flood">
                    <a className="nav__sub-link" onClick={toggleNav}>
                      <img
                        height="15px"
                        width="15px"
                        className="nav__sub-link__icon"
                        alt="Water Information Icon"
                        src={waterIcon}
                      />
                      Water Damage
                    </a>
                  </Link>
                </li>
                <li className="nav__sub-item">
                  <Link href="/fire">
                    <a className="nav__sub-link" onClick={toggleNav}>
                      <img
                        height="15px"
                        width="15px"
                        className="nav__sub-link__icon"
                        alt="Fire & Smoke Information Icon"
                        src={fireIcon}
                      />
                      Fire & Smoke
                    </a>
                  </Link>
                </li>
                <li className="nav__sub-item">
                  <Link href="/mold">
                    <a className="nav__sub-link" onClick={toggleNav}>
                      <img
                        height="15px"
                        width="15px"
                        className="nav__sub-link__icon"
                        alt="Mold Information Icon"
                        src={moldIcon}
                      />
                      Mold
                    </a>
                  </Link>
                </li>
                <li className="nav__sub-item">
                  <Link href="/biohazards">
                    <a className="nav__sub-link" onClick={toggleNav}>
                      <img
                        height="15px"
                        width="15px"
                        className="nav__sub-link__icon"
                        alt="Biohazards Information Icon"
                        src={biohazardIcon}
                      />
                      Biohazards
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </ActiveLink>
        </li>
        <li className="nav__item">
          <ActiveLink href="/insurance" onClick={toggleNav}>
            Insurance
          </ActiveLink>
        </li>
        <li className="nav__item">
          <ActiveLink href="/blog" onClick={toggleNav}>
            Blog
          </ActiveLink>
        </li>
        <li className="nav__item">
          <ActiveLink href="/about" onClick={toggleNav}>
            About
          </ActiveLink>
        </li>
        <li className="nav__item">
          <ActiveLink href="/contact" onClick={toggleNav}>
            Contact
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
