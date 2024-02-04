import "../styles/tab-button.css";

export function TabButton ({ label, onClick, isActive }) {
    return (
        <li>
            <button onClick={onClick} className={isActive && "active"}>
                {label}
            </button>
        </li>
    )
};