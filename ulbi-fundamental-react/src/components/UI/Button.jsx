import React from 'react';
import classes from './ui.module.css';

const Button = ({ children, additionalClasses, ...props }) => {
    const rootClasses = [classes.button];
    if(additionalClasses)
        rootClasses.push(...additionalClasses);

    return (
        <button className={rootClasses.join(' ')} {...props}>
            {children}
        </button>
    );
};

export default Button;