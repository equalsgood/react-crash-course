import './styles/App.css';
import {BrowserRouter} from "react-router";
import Header from "./components/UI/Header";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
