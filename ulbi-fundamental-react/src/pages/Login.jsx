import React, {useContext} from 'react';
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import {AuthContext} from "../context";

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Login" />
                <Input type="password" placeholder="Password" />
                <Button>Log in</Button>
            </form>
        </div>
    );
};

export default Login;