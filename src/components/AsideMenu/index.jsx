import { NavLink } from 'react-router-dom';
import './index.css';

export const AsideMenu = () => {
  const links = [
    { to: '/abordagens', label: 'Abordagens' },
    { to: '/especialidades', label: 'Especialidades' },
    { to: '/psicologos', label: 'Psicólogos' },
    { to: '/assistentes', label: 'Assistentes' },
    { to: '/materiais', label: 'Materiais' },
  ];
  return (
    <aside>
      <nav aria-label="Menu lateral">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            reloadDocument
            to={to}
            className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
