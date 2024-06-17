import { Heading, Highlight } from '@chakra-ui/react';
import React from 'react';

const HeaderHighlight = ({ query, text, color }) => {
  return (
    <div>
      <Heading size={'2xl'} lineHeight="tall">
        <Highlight
          query={query}
          styles={{ px: '2', py: '1', rounded: 'full', bg: color }}
        >
          {text}
        </Highlight>
      </Heading>
    </div>
  );
};

export default HeaderHighlight;
