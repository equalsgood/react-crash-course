import SingleInput from "./SingleInput";

export default function UserInput({data, changeHandler}) {
    return (
        <section id="user-input">
            <div className='input-group'>
                <SingleInput value={data.initialInvestment} labelName='Initial Investment'
                             changeHandler={(e) => changeHandler('initialInvestment', e.target.value)}/>
                <SingleInput value={data.annualInvestment} labelName='Annual Investment'
                             changeHandler={(e) => changeHandler('annualInvestment', e.target.value)}/>
                <SingleInput value={data.expectedReturn} labelName='Expected Return'
                             changeHandler={(e) => changeHandler('expectedReturn', e.target.value)}/>
                <SingleInput value={data.duration} labelName='Duration' changeHandler={(e) => changeHandler('duration', e.target.value)}/>
            </div>
        </section>
    );
}