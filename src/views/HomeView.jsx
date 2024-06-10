import React from 'react';
import { useUser } from '../context/UserContext';

const HomeView = () => {
  const { setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      <div>HomeView</div>
      <div>HomeView</div>
      <div>HomeView</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default HomeView;
