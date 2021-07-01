import styles from "~/hoc/ProjectLayout/ProjectLayout.module.scss";
import { useRouter } from "next/router";

export interface SidebarLinkProps {
    image: React.ReactFragment;
    title: string;

    href: string;

    selected?: boolean;
    onClick?: () => void;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({ selected, onClick, image, title, href }) => {
    const router = useRouter();

    return (
        <a href={href} style={{ textDecoration: 'none' }} onClick={e => {
            e.preventDefault();
            router.push(href);
        }}>
            <div onClick={() => onClick?.()} className={[styles.button, ...(selected ? [styles.selected] : [])].join(' ')}>
                <div className={styles.buttonIcon}>{image}</div>
                <div className={styles.buttonTitle}>{title}</div>
            </div>
        </a>
    );
};