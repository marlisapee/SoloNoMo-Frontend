import { Search2Icon } from '@chakra-ui/icons';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Colors } from '../../config';

const SearchBar = ({ placeholderText, data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // filter data based on query
  };

  return (
    <>
      <InputGroup size="lg" style={{ width: '50%' }}>
        <InputLeftElement pointerEvents="none">
          <Search2Icon fontSize={'2xl'} color={Colors.honeyDew} />
        </InputLeftElement>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          borderWidth="2px"
          boxShadow="1px 1px 1px 1px #5E6572"
          focusBorderColor={Colors.redPantone}
          borderRadius="40px"
          type="text"
          placeholder={placeholderText}
        />
        <InputRightElement width={'4.5rem'}>
          <Button
            color={Colors.black}
            bgColor={Colors.aquamarine}
            borderRadius={'40px'}
            size="sm"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default SearchBar;
