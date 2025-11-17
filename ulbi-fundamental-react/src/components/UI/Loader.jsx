import React from 'react';
import classes from './ui.module.css';

const Loader = () => {
    return (
        <div className={classes.loaderContainer}>
            <div className={classes.loader}/>
        </div>
    );
};

export default Loader;