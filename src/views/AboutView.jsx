import React from 'react';
import Header from '../components/common/Header';
import { Heading, Highlight } from '@chakra-ui/react';
import { Colors } from '../config';
import HeaderHighlight from '../components/common/HeaderHighlight';

const AboutView = () => {
  return (
    <div>
      <HeaderHighlight
        query="Solo No Mo'"
        text="How to use Solo No Mo'"
        color={Colors.aquamarine}
      />
    </div>
  );
};

export default AboutView;
