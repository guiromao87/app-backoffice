import axios from "axios";
import { useEffect, useState } from "react";

const Especialidade = () => {
    
    const [especialidades, setEspecialidades] = useState([])

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        axios.get('http://localhost:8080/api/v1/specialities', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(resposta => setEspecialidades(resposta.data))
    }, [])
    
    return (
        <div>
            <h1>Especialidades</h1>
            <ul>
                {especialidades.map(especialidade => <li>{especialidade.name}</li>)}
            </ul>
        </div>
    )
}

export default Especialidade;