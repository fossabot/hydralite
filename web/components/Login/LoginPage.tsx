import styles from './LoginPage.module.scss'
import Button from '../Button/Button'
import Meta from '~/components/Meta'

const Login = () => {
    return (
        <>
            <Meta
                title="Hydralite"
                description="Hydralite is the new open source platform for project management and open source project discovery."
                url="https://hydralite.io"
                keywords="open source,hydralite,project management"
            />
            <div className={styles.box_center}>
                <div className={styles.login_box}>
                    <img src="/logo.png" alt="Logo" className={styles.logo} />
                    <h1>Login to Hydralite</h1>
                    <p className={styles.p_margin}>
                        Hydralite is the new open source platform for project
                        management and open source project discovery.
                    </p>
                    <div className={styles.button_center}>
                        <Button color="black" text="Login with GitHub" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
