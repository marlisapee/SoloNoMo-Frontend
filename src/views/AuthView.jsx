import React from 'react';
import LoginForm from '../components/forms/LoginForm';

const AuthView = ({ setLoggedInUser }) => {
  return (
    <>
      <LoginForm setLoggedInUser={setLoggedInUser} />
    </>
  );
};

export default AuthView;
