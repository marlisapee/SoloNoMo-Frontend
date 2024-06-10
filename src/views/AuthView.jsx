import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';

const AuthView = () => {
  return (
    <>
      <LoginForm />
      <SignupForm />
    </>
  );
};

export default AuthView;
