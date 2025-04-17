import { useState, useEffect } from "react";
import './index.css';
import { Toggle } from "./Toggle";

export const Modal = ({ placeholder, title, defaultData, onSubmit, onClose, error, showInput = true, showToggle = false }) => {
    const [input, setInput] = useState("");
    const [status, setStatus] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({ name: input, status: status });
    }

    useEffect(() => {
        if (defaultData) {
            setInput(defaultData.name);
            setStatus(defaultData.status);
        } else {
            setStatus(true);
        }
    }, [defaultData]);

    return (
        <form onSubmit={handleSubmit} id="modal">
            <h3>{title}</h3>

            {showInput && (
                <input
                    required
                    value={input}
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => setInput(e.target.value)} />
            )}

            {(defaultData || showToggle) && (
                <Toggle setStatus={setStatus} status={status} />
            )}

            {error && <p className="error-message">{error}</p>}

            <div className="button-group">
                <button type="submit">{defaultData ? "Salvar" : "Adicionar"}</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </div>
        </form >
    )
}