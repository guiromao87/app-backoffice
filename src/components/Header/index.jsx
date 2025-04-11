import { Link } from 'react-router-dom';
import './index.css'

const Header = () => {

    const name = sessionStorage.getItem('name');

    return ( 
        <header>
            <nav className="nav__header">
            <div className='user__logged'>
                    <b>Usuário:</b> {name}
                </div> 
                <div className='menu'>
                    <ul>
                        <li><Link to="/profissionais">Profissionais</Link></li>
                        <li><Link to="/abordagens">Abordagens</Link></li>
                        <li><Link to="/especialidades">Especialidades</Link></li>
                    </ul>
                </div>  
                <div className='user__logged'>
                    <Link to="/sair">Logout</Link>
                </div> 
            </nav>
        </header>
    )
}

export default Header;