import React from 'react';
import classes from './ui.module.css';

const Button = ({ children, ...props }) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};

export default Button;