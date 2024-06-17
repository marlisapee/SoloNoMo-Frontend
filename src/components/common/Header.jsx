import { Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { Colors, Images } from '../../config';

const Header = ({ text, color, size, icon, iconColor }) => {
  return (
    <div id="header-container">
      <Heading as="h1" size={size} style={{ color: color, padding: '20px' }}>
        {text}
      </Heading>
      {icon && <Icon as={icon} boxSize={12} color={iconColor} />}
    </div>
  );
};

export default Header;
