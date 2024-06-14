import React from 'react';

import { useUser } from '../context/UserContext';
import Header from '../components/common/Header';
import { Colors } from '../config';
import AllTripsList from '../components/lists/AllTripsList';

const HomeView = () => {
  const { user } = useUser();
  return (
    <>
      <Header
        color={Colors.aquamarine}
        text={'Welcome back, ' + user.firstName}
        size={'2xl'}
        img={true}
      />
      <AllTripsList />
    </>
  );
};

export default HomeView;
