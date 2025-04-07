import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handlerSubmit = (event) => {
        event.preventDefault();
        
        async function authentica() {
            let auth = {email, password}
            console.log('chamando...');
            
            let response = await fetch("http://localhost:8080/api/v1/login", {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify(auth)
            });
            result = await response.json();
        }
        authentica();
    }

    return (
        <div className="container">
            <form onSubmit={handlerSubmit}>
                <h1>Cloud4Care Backoffice</h1>
                <div className="input-field">
                    <input type="text" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Digite seu senha" onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login;