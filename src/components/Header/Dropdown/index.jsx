import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css';
import { forwardRef } from "react";

export const Dropdown = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        // await api.post({ endpoint: '/logout?refreshToken=' }); //TODO: preciso arrumar o refresh token para enviar ele
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