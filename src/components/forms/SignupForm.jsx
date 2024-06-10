import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { loginUser, signUpUser } from '../../services/userService';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          value={firstName}
        />
        <label>Last Name: </label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          value={lastName}
        />
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
        <label>Profile Picture Url: </label>
        <input
          onChange={(e) => setProfilePicture(e.target.value)}
          type="text"
          value={profilePicture}
        />
        <label>Bio: </label>
        <input
          onChange={(e) => setBio(e.target.value)}
          type="text"
          value={bio}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
