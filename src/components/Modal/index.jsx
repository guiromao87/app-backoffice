import { useState, useEffect } from "react";
import './index.css';

export const Modal = ({ placeholder, title, defaultData, onSubmit, onClose }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({ name: input });
    }

    useEffect(() => {
        if (defaultData) {
            setInput(defaultData.name);
        }
    }, [defaultData]);

    return (
        <form onSubmit={handleSubmit} id="modal">
            <h3>{title}</h3>
            <input
                required
                value={input}
                type="text"
                placeholder={placeholder}
                onChange={(e) => setInput(e.target.value)} />

            <div className="button-group">
                <button type="submit">{defaultData ? "Salvar" : "Adicionar"}</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </div>
        </form>
    )
}