import { useState } from "react";
import { calculateInvestmentResults } from './util/investment';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
    const [data, setData] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '',
        duration: ''
    });
    const [investmentResults, setInvestmentResults] = useState([]);

    const changeHandler = (prop, value) => {
        setData(prevState => {
            const result = {...prevState, [prop]: value};

            if(result.initialInvestment && result.annualInvestment && result.duration && result.expectedReturn) {
                const newInvestmentResults = calculateInvestmentResults({
                    initialInvestment: +result.initialInvestment,
                    annualInvestment: +result.annualInvestment,
                    duration: +result.duration,
                    expectedReturn: +result.expectedReturn,
                });
                console.log(newInvestmentResults);
                setInvestmentResults(newInvestmentResults);
            } else setInvestmentResults([]);

            return result;
        })
    }
    return (
        <>
            <Header/>
            <UserInput data={data} changeHandler={changeHandler}/>
            {!!investmentResults.length && <Result investmentResults={investmentResults}/>}
        </>
    )
}

export default App
