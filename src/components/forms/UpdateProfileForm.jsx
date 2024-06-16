import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { updateUserProfile } from '../../services/userService';

const UpdateProfileForm = () => {
  const { user, setUser } = useUser();

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password || '');
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || ''
  );
  const [bio, setBio] = useState(user?.bio || '');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUserProfile({
        id: user?.id,
        firstName,
        lastName,
        email,
        password,
        profilePicture,
        bio,
      });
      console.log(updatedUser);
      setUser(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p={4} maxWidth="500px" mx="auto">
      <form onSubmit={handleUpdateProfile}>
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
          <FormLabel>Profile Picture URL</FormLabel>
          <Input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Bio</FormLabel>
          <Input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            noOfLines={3}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Update Profile!
        </Button>
      </form>
    </Box>
  );
};

export default UpdateProfileForm;
