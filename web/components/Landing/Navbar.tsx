import React from "react";
import styles from "~/styles/index.module.css";
import NavLink from "~/components/Landing/NavLink";
import { projectName } from "~/constants";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <img
          src="/devmark-logo-bgtransp.png"
          alt={projectName}
          className={styles.navbar__logo}
        />
      </div>
      <div>
        <NavLink text="Join the waitlist" />
      </div>
    </nav>
  );
};

export default Navbar;
