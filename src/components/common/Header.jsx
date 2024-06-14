import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Images } from '../../config';

const Header = ({ text, color, size, img }) => {
  return (
    <div id="header-container">
      <Heading as="h1" size={size} style={{ color: color }}>
        {text}
      </Heading>
      {img && <img src={Images.airplaneImg} width="100px" />}
    </div>
  );
};

export default Header;
