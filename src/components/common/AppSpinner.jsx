import React from 'react';
import { Colors } from '../../config';
import { Spinner } from '@chakra-ui/react';

const AppSpinner = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor={Colors.frenchGray}
      color={Colors.aquamarine}
      size="xl"
    />
  );
};

export default AppSpinner;
