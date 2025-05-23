import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css';
import api from "../../../services/config";
import { forwardRef } from "react";


export const Dropdown = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const refresh = sessionStorage.getItem('refresh')

        await api.post(`/logout?refreshToken=${refresh}`);
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div {...props} ref={ref} className='dropdown-header'>
            <NavLink to="/home" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
                <RxAvatar className='avatar-dropdown' />
                Perfil
            </NavLink>
            <div className="menu-link" onClick={handleLogout}>
                <FiLogOut style={{ marginRight: "0.5rem" }} />
                Logout
            </div>
        </div>
    )
})