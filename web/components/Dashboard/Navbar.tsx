const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_left}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
                <div className={styles.nav_group}>
                    <h3>Dashboard</h3>
                </div>
                <div className={styles.nav_group}>
                    <h3>Projects</h3>
                    <img src="/icons/down_arrow.svg" alt="down" />
                </div>
                <div className={styles.nav_group}>
                    <h3>Discover</h3>
                    <img src="/icons/down_arrow.svg" alt="down" />
                </div>
                <div className={styles.nav_group}>
                    <h3>Communicate</h3>
                    <img src="/icons/down_arrow.svg" alt="down" />
                </div>
                <div className={styles.nav_group}>
                    <h3>More</h3>
                    <img src="/icons/down_arrow.svg" alt="down" />
                </div>
            </div>
            <div className={styles.navbar_right}>
                <img
                    src="icons/search.svg"
                    alt="search"
                    className={styles.nav_icon}
                />
                <img
                    src="icons/notifications.svg"
                    alt="notifications"
                    className={styles.nav_icon}
                />
                <img src="/avatar.svg" alt="avatar" className={styles.avatar} />
                <img
                    src="/icons/down_arrow.svg"
                    alt="down"
                    className={styles.down_arrow}
                />
            </div>
        </div>
    );
};

export default Navbar;
