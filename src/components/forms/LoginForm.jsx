import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { loginUser } from '../../services/userService';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Images } from '../../config/images';

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
    <Box p={4} bg="rgba(69, 123, 157, 0.3)" borderRadius="md">
      <img className="logo-auth" src={Images.logoImg} width="100px" />
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
