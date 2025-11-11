import ResultRow from "./ResultRow";

export default function Result({investmentResults}) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th scope='col'>Year</th>
                    <th scope='col'>Investment Value</th>
                    <th scope='col'>Interest (Year)</th>
                    <th scope='col'>Total Interest</th>
                    <th scope='col'>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.map(
                    ({year, interest, valueEndOfYear, annualInvestment}) =>
                        <ResultRow year={year} interest={interest} value={valueEndOfYear} capital={valueEndOfYear - annualInvestment} total={annualInvestment} />
                )}
            </tbody>
        </table>
    )
}