export const Toggle = ({text, toggle, setToggle}) => {
    return (
        <div className="toggle-container">
            <span>{text}</span>
            <label className="switch">
                <input type="checkbox" checked={!!toggle} onChange={(e) => setToggle(e.target.checked)} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}