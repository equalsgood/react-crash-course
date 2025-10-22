export default function TabButton({ children, onClick, active }) {
    return (
        <li>
            <button className={active ? 'active' : ''} onClick={onClick} >{children}</button>
        </li>
    )
};