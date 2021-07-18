import React from 'react';
import styles from './Navbar.module.css';
import { projectName } from '~/constants';
import scrollToRef from 'util/scrollToRef';

const NavLink = ({
  text,
  href,
  onClick,
}: {
  text: string;
  href?: string;
  onClick: (e) => any;
}) => {
  return (
    <a className={styles.navbar__link} href={href || ''} onClick={onClick}>
      {text}
    </a>
  );
};

const Navbar = ({ connectCardRef }) => {
  return (
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
};

export default Navbar;
