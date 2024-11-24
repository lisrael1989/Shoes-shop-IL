import { useState, useEffect } from 'react';
import usersData from '../../public/data/users.json';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (storedUsers.length === 0) {
      localStorage.setItem('users', JSON.stringify(usersData.users));
    }
    setUsers(storedUsers);

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogin = (loggedInUser, navigate) => {
    setUser(loggedInUser); // Update the context state
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    navigate('/shoes'); // Redirect after login
  };

  const handleLogout = (navigate) => {
    setUser(null); // Reset the context state
    localStorage.removeItem('user');
    navigate('/'); // Redirect to home after logout
  };

  return {
    user,
    isAdmin: user?.isAdmin || false,
    users,
    handleLogin,
    handleLogout,
  };
}
