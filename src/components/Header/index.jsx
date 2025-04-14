import './index.css';

const Header = () => {

    const name = sessionStorage.getItem('name');

    return (
        <header>
            <nav className="nav__header">
                <div className='user__logged'>
                    <b>Backoffice - Cloud4Care</b>
                </div>
                <div className='menu'>

                </div>
                <div className='user__logged'>
                    <p>{name}</p>
                </div>
            </nav>
        </header>
    )
}

export default Header;