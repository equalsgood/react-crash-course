export default function SingleInput({labelName, changeHandler, value}) {
    return (
        <div>
            <label htmlFor={`${labelName}-input`}>{labelName}</label>
            <input id={`${labelName}-input`} type='number' value={value} onChange={changeHandler} />
        </div>
    )
}