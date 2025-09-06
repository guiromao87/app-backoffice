import api from '../../services/config';
import { useEffect, useState } from 'react';

const Especialidade = () => {
  const [especialidades, setEspecialidades] = useState([]);

  useEffect(() => {
    api.get('/especialidades').then((resposta) => setEspecialidades(resposta.data));
  }, []);

  return (
    <div>
      <h1>Especialidades</h1>
      <ul>
        {especialidades.map((especialidade) => (
          <li>{especialidade.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Especialidade;
