import { useState } from 'react';

export default function Player({ initialName, symbol, active }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);

    function clickHandler() {
        setIsEditing((prevState) => !prevState);
    }

    function changeHandler(e) {
        setName(e.target.value);
    }

    return (
        <li className={active ? 'active' : undefined}>
            <span className="player">
                {isEditing ?
                    <input required type="text" value={name} onChange={changeHandler} /> :
                    <span className="player-name">{name}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
};