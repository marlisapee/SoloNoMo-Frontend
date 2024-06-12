import React, { useState } from 'react';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';
import { Box, Button, useTheme } from '@chakra-ui/react';

const AuthView = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const theme = useTheme();

  const handleToggle = () => {
    setToggleLogin(!toggleLogin);
  };

  return (
    <div id="auth-container">
      <Box p={4} maxWidth="400px" mx="auto" mt={8}>
        {toggleLogin ? <LoginForm /> : <SignupForm />}
        <Button
          onClick={handleToggle}
          mt={4}
          bg={theme.colors.redPantone[500]}
          color="white"
          width="full"
        >
          {toggleLogin
            ? 'Need an account? Click here to SIGN UP'
            : 'Already have an account? Click here to LOG IN'}
        </Button>
      </Box>
    </div>
  );
};

export default AuthView;
