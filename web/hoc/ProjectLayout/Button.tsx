import styles from "./ProjectLayout.module.scss";
import { useRouter } from "next/router";

export interface ProjectButtonProps {
    image: React.ReactFragment;
    title: string;

    href: string;

    selected?: boolean;
    onClick?: () => unknown;
}

export const ProjectButton: React.FC<ProjectButtonProps> = ({ selected, onClick, image, title, href }) => {
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