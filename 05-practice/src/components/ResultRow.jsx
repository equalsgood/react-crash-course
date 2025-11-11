import { formatter } from '../util/investment';

export default function ResultRow({year, value, interest, total, capital}) {
    return (
        <tr>
            <td>{year}</td>
            <td>{formatter.format(value)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(capital)}</td>
            <td>{formatter.format(total)}</td>
        </tr>
    )
}