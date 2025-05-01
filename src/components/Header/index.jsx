import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa";
import { Dropdown } from "./Dropdown";
import './index.css';

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    const name = sessionStorage.getItem('name');

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
                setOpenDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <header>
            <nav className="nav__header">
                <h1>Backoffice - Cloud4Care</h1>

                <div ref={buttonRef} onClick={() => setOpenDropdown(prev => !prev)}
                    className={`user__logged ${openDropdown ? 'active' : ''}`}>

                    <p>{name}</p>
                    {openDropdown ? <FaCaretDown /> : <FaCaretLeft />}
                    <img src="./assets/avatar.png" alt="avatar icone" className="avatar-header" />
                </div>

                {openDropdown && <Dropdown ref={dropdownRef} />}
            </nav>
        </header>
    )
}

export default Header;