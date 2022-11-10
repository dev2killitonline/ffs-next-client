// This link will display with an underline if its path is active in the url

import Link from "next/link";
import { useRouter } from "next/router";

export default function ActiveLink({ href, onClick, children }) {
  const { asPath } = useRouter();
  if (href) {
    return (
      <Link {...{ href }}>
        <a
          className={`nav__link ${href === asPath ? "selected" : ""}`}
          {...{ onClick }}
        >
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <span
        className={`nav__link ${href === asPath ? "selected" : ""}`}
        {...{ onClick }}
      >
        {children}
      </span>
    );
  }
}
