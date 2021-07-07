import Button from "../Button/Button";
import Meta from "partials/Meta";
import styles from "./LoginPage.module.scss";

const Login = () => {
  return (
    <>
      <Meta
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />

      <img src="/logo.png" alt="Logo" className="mt-4 ml-4 w-20" />
      <div className="flex justify-center items-center">
        <div className={styles.login_box}>
          <h1 className={styles.login_header}>Sign in to Hydralite</h1>
          <p className={styles.p_margin}>
            Seamless Project Management is just one click away.
          </p>
          <div className={styles.button_center}>
            <div className={styles.button_container}>
              <Button
                className={styles.button_link}
                color="muted"
                text="Continue With Google"
                iconName="google"
                href="#"
              />
              <Button
                className={styles.button_link}
                color="muted"
                text="Continue With GitHub"
                iconName="github"
                href="#"
              />
              <Button
                className={styles.button_link}
                color="muted"
                text="Continue With Discord"
                iconName="discord"
                href="#"
              />
              <Button
                className={styles.button_link}
                color="muted"
                text="Continue With Twitter"
                iconName="twitter"
                href="#"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
