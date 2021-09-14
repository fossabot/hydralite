import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <img src="/logo.png" alt="" className={styles.footer__logo} />
    <h3 className={styles.footer__credit}>Designed and Implemented by <a href="https://github.com/fullstackslayer">Aaryaman Maheshwari</a></h3>
  </div>
);

export default Footer;
