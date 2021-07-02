import React from "react";
import { FC } from "react";
import Icon from "~/components/Icon";
import Link from "next/link";

interface Props {
    color: "accent" | "muted" | "black";
    text: string;
    iconName?: any;
    className?: string
    onClick?: () => any;
    href?: string;
}

const Button: FC<Props> = ({ color, text, onClick, iconName, href, className }) => {
    let colorClass;
    switch (color) {
        case "accent":
            colorClass = styles.button__accent;
            break;
        case "muted":
            colorClass = styles.button__muted;
            break;
        case "black":
            colorClass = styles.button__black;
            break;
    }

    if (!href) {
        return (
            <button
                className={`${styles.button} ${className} ${colorClass}`}
                onClick={onClick}
            >
                {iconName && (
                    <Icon name={iconName} className={styles.button__icon} />
                )}
                {text}
            </button>
        );
    }

    return (
        <Link href={href}>
            <a className={`${styles.button} ${className} ${colorClass}`}>
                {iconName && (
                    <Icon name={iconName} className={styles.button__icon} />
                )}
                {text}
            </a>
        </Link>
    );
};

export default Button;
