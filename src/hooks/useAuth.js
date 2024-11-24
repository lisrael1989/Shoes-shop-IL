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
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    navigate('/shoes');
  };

  const handleLogout = (navigate) => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return {
    user,
    isAdmin: user?.isAdmin || false,
    users,
    handleLogin,
    handleLogout,
  };
}
