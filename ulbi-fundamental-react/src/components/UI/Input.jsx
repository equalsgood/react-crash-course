import React from 'react';
import classes from './ui.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.input} {...props} />
    );
});

export default Input;