import React, { Key } from "react";

export interface SwitchProps {
    value: Key;
}


export const Switch: React.FC<SwitchProps> = ({ value, children }) => {
    const cases = Array.isArray(children) ? children as React.ReactElement[] : typeof children === 'object' ? [children as React.ReactElement] : [];

    let result = false;
    for (let c of cases) {
        if (c.key == value) result = true;
        if (c.props.default) result = true;
        if (!result) continue;
        if (c.props.nextValue) continue;
        return c;
    }

    return null;
};
