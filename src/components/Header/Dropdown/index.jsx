import { forwardRef } from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import './index.css';

export const Dropdown = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const refresh = sessionStorage.getItem('refresh')

        // await api.post(`/logout?refreshToken=${refresh}`);
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div {...props} ref={ref} className='dropdown-header'>
            <div className="menu-link" onClick={handleLogout}>
                <FiLogOut style={{ marginRight: "0.5rem" }} />
                Logout
            </div>
        </div>
    )
})