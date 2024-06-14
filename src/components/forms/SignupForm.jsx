import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { loginUser, signUpUser } from '../../services/userService';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Images } from '../../config';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');

  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signUpUser({
        firstName,
        lastName,
        email,
        password,
        profilePicture,
        bio,
      });
      console.log('user in handler: ', user);
      if (user) {
        const loggedInUser = await loginUser({
          email: user.email,
          password: user.password,
        });
        localStorage.setItem('user', JSON.stringify(loggedInUser));
        setUser(user);
      }
    } catch (error) {
      console.error('sign up failed...', error);
    }
  };

  return (
    <Box p={4} bg="rgba(69, 123, 157, 0.3)" borderRadius="md">
      <img className="logo-auth" src={Images.logoImg} width="100px" />

      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
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
        <FormControl mb={4}>
          <FormLabel>Profile Picture Url</FormLabel>
          <Input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Bio</FormLabel>
          <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
