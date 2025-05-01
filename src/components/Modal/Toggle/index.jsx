export const Toggle = ({status, setStatus}) => {
    return (
        <div className="toggle-container">
            <span>Ativar:</span>
            <label className="switch">
                <input type="checkbox" checked={status} onChange={(e) => setStatus(e.target.checked)} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}