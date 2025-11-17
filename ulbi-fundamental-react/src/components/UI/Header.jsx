import React from 'react';
import { Link } from "react-router";
import classes from "./ui.module.css";

const Header = () => {
    return (
        <header className={classes.navbar}>
            <nav className={classes.navbar_links}>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </header>
    );
};

export default Header;