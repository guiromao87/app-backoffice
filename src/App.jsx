import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Profissionais from './pages/profissionais/Profissionais'
import Header from './components/Header'
import Abordagem from './pages/abordagens/Abordagem'
import Especialidade from './pages/especialidades/Especialidade'

function App() {
  
  return (
    
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/abordagens" element={<Abordagem />} />
          <Route path="/especialidades" element={<Especialidade />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
