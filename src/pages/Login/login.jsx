import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";
import "./Login.css"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handlerSubmit = (event) => {
        event.preventDefault();
        
        axios.post("http://localhost:8080/api/v1/login", {email, password})
            .then(resposta => {
                sessionStorage.setItem('token', resposta.data.accessToken)
                sessionStorage.setItem('name', resposta.data.userLoggedDTO.name)
                sessionStorage.setItem('email', resposta.data.userLoggedDTO.email)
                navigate('/home')
            }).catch(erro => {
                alert("Email ou senha inválidos")
        })
    }

    return (
        <div className="teste">
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
        </div>
    )
}

export default Login