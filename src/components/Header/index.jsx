import { useState } from "react";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Dropdown } from "./Dropdown";
import './index.css';

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const name = sessionStorage.getItem('name');

    return (
        <header>
            <nav className="nav__header">
                <h1>Backoffice - Cloud4Care</h1>

                <div onClick={() => setOpenDropdown(prev => !prev)}
                    className={`user__logged ${openDropdown ? 'active' : ''}`}>

                    <p>{name}</p>
                    {openDropdown ? <FaCaretDown /> : <FaCaretLeft />}
                    <img src="./assets/avatar.png" alt="avatar icone" className="avatar-header" />
                </div>

                {openDropdown && <Dropdown />}
            </nav>
        </header>
    )
}

export default Header;