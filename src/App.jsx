import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import Main from './pages/Main/main'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
  
  
  
  
  
  // return (
  //   <div className="App">
  //     <Login />
  //   </div>
  // )
}

export default App
