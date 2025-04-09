import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";
import "./Login.css"
import axios from "axios";
import { Link } from "react-router-dom";

const Login  = () => {
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
}

export default Login