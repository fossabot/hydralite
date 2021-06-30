import React from "react";

export interface CaseProps {
    nextValue?: boolean;
    default?: boolean;
}

export const Case: React.FC<CaseProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};
