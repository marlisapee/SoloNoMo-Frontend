import React from 'react';

import { useUser } from '../context/UserContext';
import Header from '../components/common/Header';
import { Colors } from '../config';
import AllTripsList from '../components/lists/AllTripsList';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon, SearchIcon } from '@chakra-ui/icons';

const HomeView = () => {
  const { user } = useUser();
  return (
    <>
      <Header
        color={Colors.aquamarine}
        text={'Welcome back, ' + user.firstName + '!'}
        size={'2xl'}
        img={false}
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Header color={Colors.honeyDew} text="Where to next?" />
        <InputGroup style={{ width: '50%' }}>
          <InputLeftElement pointerEvents="none">
            <Search2Icon fontSize={'2xl'} color="gray.300" />
          </InputLeftElement>
          <Input
            borderRadius="40px"
            type="text"
            placeholder="Places to go..."
          />
          <InputRightElement width={'4.5rem'}>
            <Button borderRadius={'40px'} size="sm">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      <div style={{ padding: '40px' }}>
        <AllTripsList />
      </div>
    </>
  );
};

export default HomeView;
