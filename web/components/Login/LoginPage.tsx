import Button from "../Button/Button";
import Meta from "partials/Meta";
import Image from "next/image";
import styles from "./LoginPage.module.scss";
import { DiscordIcon, GithubIcon, GoogleIcon, TwitterIcon } from "../Icons";
import React from "react";

const Login = () => {
  return (
    <>
      <Meta
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source, hydralite, project management"
      />
      <main className={styles.main}>
        <div className={styles.left_side}></div>
        <section className={styles.right_sect}>
          <nav className={styles.right_nav}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_li}>
                <a
                  href="/login"
                  className={`${styles.nav_link} ${styles.login_lnk}`}
                >
                  Login
                </a>
              </li>
              <li className={styles.nav_li}>
                <a href="/signup" className={styles.nav_link}>
                  Create account
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.right_body}>
            <div className={styles.header}>
              <h1 className={styles.heading}>
                Login to <span>Hydralite</span>
              </h1>
              <h4 className={styles.head_sub}>Discover. Develop. Deploy</h4>
            </div>
            <div className={styles.login_options}>
              <button className={styles.login_btn}>
                <div style={{ width: 50, height: 50, marginRight: 60 }}><GoogleIcon /></div>
                <div>Continue with Google</div>
              </button>
              <button className={styles.login_btn}>
                <div style={{ width: 50, height: 50, marginRight: 60 }}><GithubIcon /></div>
                <div>Continue with Github</div>
              </button>
              <button className={styles.login_btn}>
                <div style={{ width: 50, height: 50, marginRight: 60 }}><TwitterIcon /></div>
                <div>Continue with Twitter</div>
              </button>
              <button className={styles.login_btn}>
                <div style={{ width: 50, height: 50, marginRight: 60 }}><DiscordIcon /></div>
                <div>Continue with Discord</div>
              </button>
            </div>
          </div>
          <p className={styles.tc_para}>
            By continuing you, you agree to the <a href="#">Terms of Service</a>
          </p>
        </section>
      </main>
    </>
  );
};

export default Login;
