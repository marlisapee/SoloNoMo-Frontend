import axios from 'axios';
import React, { useState } from 'react';
import { loginUser } from '../../services/userService';
import { useUser } from '../../context/UserContext';

const LoginForm = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = loginUser({ email, password });
    console.log(user);
    if (user) setUser(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />
        <label>Password: </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LoginForm;
