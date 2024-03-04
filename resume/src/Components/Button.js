import React, {useState} from "react";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn-medium', 'btn--large'];
const LINKS = ['/', '/home', '/about', '/education', '/experience'];


export const Button =({ /* properties: */
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle : STYLES[0]

    const checkButttonSize = SIZES.includes (buttonSize) ? buttonSize : SIZES[0]

    return (

        <button
            className = {'btn ${checkButtonStyle} ${checkButttonSize}'}
            onClick = {onclick}
            type={type}
            link={link}
        >
            {children}
        </button>


    )

};


