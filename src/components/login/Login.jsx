import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";
import "./Login.css"

const Login = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState(""); 

    const handlerSubmit = (event) => {
        // Le as variaveis criadas acima e passa para o servidor
        event.preventDefault();
        alert("Login: " + login + " - " + password);
    }

    return (
        <div className="container">
            <form onSubmit={handlerSubmit}>
                <h1>Cloud4Care Backoffice</h1>
                <div className="input-field">
                    <input type="text" placeholder="Digite seu email" onChange={(e) => setLogin(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Digite seu senha" onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login;