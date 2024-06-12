import { Heading } from '@chakra-ui/react';
import React from 'react';

const Header = ({ text, color }) => {
  return (
    <Heading as="h1" size="4xl" style={{ color: color }}>
      {text}
    </Heading>
  );
};

export default Header;
