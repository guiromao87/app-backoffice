import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/login';
import Home from './pages/home/Home';
import Abordagem from './pages/abordagens/Abordagem';
import Especialidade from './pages/especialidades/Especialidade';
import { PrivateRoute } from './routes/PrivateRoute';
import { Detalhes } from './pages/detalhes/Detalhes';
import Psicologos from './pages/psicologos/Psicologos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<PrivateRoute Component={Home} />} />
        <Route path="psicologos" element={<PrivateRoute Component={Psicologos} />} />
        <Route path="detalhes-profissional" element={<PrivateRoute Component={Detalhes} />} />
        <Route path="abordagens" element={<PrivateRoute Component={Abordagem} />} />
        <Route path="especialidades" element={<PrivateRoute Component={Especialidade} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
