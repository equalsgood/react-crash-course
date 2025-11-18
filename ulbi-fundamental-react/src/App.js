import './styles/App.css';
import {BrowserRouter} from "react-router";
import Header from "./components/UI/Header";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
