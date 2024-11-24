import { NavLink } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className="app-header">
      <NavLink to="/">
        <img className="logo" src="/public/images/logo.png" alt="logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shoes"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Shoes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
