import React from "react";

export const Container = ({children, ClassContainer}) => {
    return <div className={ClassContainer}>{children}</div>
}

