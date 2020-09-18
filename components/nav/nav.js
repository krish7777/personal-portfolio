import React from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";

import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            home
          </Link>
          <Link className={slug === "about" ? "selected" : null} href="/about">
            about
          </Link>
          <Link
            className={slug === "portfolio" ? "selected" : null}
            href="/portfolio"
          >
            portfolio
          </Link>
          <Link
            className={slug === "contact" ? "selected" : null}
            href="/contact"
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
