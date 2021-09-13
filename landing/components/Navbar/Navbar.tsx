import React from "react";
import scrollToRef from "util/scrollToRef";
import styles from "./Navbar.module.css";
import { projectName } from "~/constants";

const NavLink = ({
  text,
  href,
  onClick,
}: {
  text: string;
  href?: string;
  onClick: (e) => any;
}) => (
  <a className={styles.navbar__link} href={href || ""} onClick={onClick}>
    {text}
  </a>
);

const Navbar = ({ connectCardRef }) => (
  <nav className={styles.navbar}>
    <img src="/logo.png" alt={projectName} className={styles.navbar__logo} />
    <NavLink
      text="Join Waitlist"
      onClick={(e) => {
        e.preventDefault();
        scrollToRef(connectCardRef);
      }}
    />
  </nav>
);

export default Navbar;
