import axios from "axios";
import { useEffect, useState } from "react";

const Abordagem = () => {
    
    const [abordagens, setAbordagens] = useState([]);
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        
        axios.get('http://localhost:8080/api/v1/approaches', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(resposta => setAbordagens(resposta.data))
    }, [])

    return (
        <div>
            <h1>Abordagem</h1>
            <ul>
                {abordagens.map(abordagem => <li>{abordagem.name}</li>)}
            </ul>
        </div>
    )
}

export default Abordagem;