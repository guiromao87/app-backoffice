import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";
import "./Login.css"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [userLogged, setUserLogged] = useState(false);
    const navigate = useNavigate()

    const handlerSubmit = (event) => {
        event.preventDefault();
        const user = {email, password}
        
        axios.post("http://localhost:8080/api/v1/login", user)
            .then(resposta => {
                console.log("Deu bom")
                sessionStorage.setItem('token', resposta.data.accessToken)
                navigate('/main')
            }).catch(erro => {
                alert(erro)
                // if(erro?.response?.data?.message) {
                //     alert(erro.response.data.message);
                // } else {
                //     alert("Deu outra merda, chama o Gui");
                // }
        })
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