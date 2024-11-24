// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';

// export function AppHeader() {
//   const { user, handleLogout } = useAuth();

//   return (
//     <header className="app-header">
//       <NavLink to="/">
//         <img className="logo" src="/public/images/logo.png" alt="logo" />
//       </NavLink>
//       <nav>
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/shoes"
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//               Shoes
//             </NavLink>
//           </li>
//           <li className="user-actions">
//             {user ? (
//               <>
//                 <span className="welcome-message">Welcome, {user.name}</span>
//                 <button className="logout-btn" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <NavLink to="/login" className="login-link">
//                 Login
//               </NavLink>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function AppHeader() {
  const { user, handleLogout } = useAuth();

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
          <li className="user-info">
            {user ? (
              <>
                <span className="welcome-message">Welcome, {user.name}</span>
                <button className="logout-btn" onClick={() => handleLogout()}>
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className="login-link">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
