import { Link, NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.header__title}>
        Sheila Ferreira
      </Link>
      <nav className={style.header__nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active_link : style.link
          }
          to="/available"
        >
          Presentes disponiveis
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active_link : style.link
          }
          to="/not-available"
        >
          Presentes dados
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
