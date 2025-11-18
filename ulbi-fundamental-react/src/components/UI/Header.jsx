import React, {useContext} from 'react';
import { Link } from "react-router";
import classes from "./ui.module.css";
import Button from "./Button";
import {AuthContext} from "../../context";

const Header = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <header className={classes.navbar}>
            { isAuth
                ?
                <>
                    <Button onClick={logout}>Log out</Button>
                    <nav className={classes.navbar_links}>
                        <Link to="/about">About</Link>
                        <Link to="/posts">Posts</Link>
                    </nav>
                </>
                :
                undefined
            }
        </header>
    );
};

export default Header;