import axios from 'axios';
import React, { useState } from 'react';
import { loginUser } from '../../services/userService';
import { useUser } from '../../context/UserContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ email, password });
      console.log('Logged in user: ', user);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      }
    } catch (error) {
      console.error('Login failed...', error);
    }
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
