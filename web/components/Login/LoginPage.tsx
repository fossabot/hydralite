import Button from "../Button/Button";
import Meta from "partials/Meta";
import Image from "next/image";
import styles from "./LoginPage.module.scss";

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
          <h1 className={styles.heading}>
            Login to <span>Hydralite</span>
          </h1>
          <h4 className={styles.head_sub}>Discover. Develop. Deploy</h4>
          <div className={styles.login_options}>
            <button className={styles.login_btn}>Continue with Google</button>
            <button className={styles.login_btn}>Continue with Github</button>
            <button className={styles.login_btn}>Continue with Twitter</button>
            <button className={styles.login_btn}>Continue with Discord</button>
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
