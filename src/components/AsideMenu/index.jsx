import { NavLink } from 'react-router-dom';
import "./index.css";

export const AsideMenu = () => {
    return (
        <aside>
            <nav aria-label="Menu lateral">
                <NavLink to="/abordagens" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
                    Abordagens
                </NavLink>
                <NavLink to="/especialidades" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
                    Especialidades
                </NavLink>
                <NavLink to="/profissionais" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
                    Profissionais
                </NavLink>
                <NavLink to="/materiais" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
                    Materiais
                </NavLink>
            </nav>
        </aside>
    )
}