import React from 'react';
import { FaPeoplePulling } from 'react-icons/fa6';

import AllUsersList from '../components/lists/AllUsersList';
import Header from '../components/common/Header';
import { Colors } from '../config';

const TravelersView = () => {
  return (
    <div>
      <Header
        text={'Meet other travelers!'}
        size={'2xl'}
        icon={FaPeoplePulling}
        iconColor={Colors.aquamarine}
      />
      <AllUsersList />
    </div>
  );
};

export default TravelersView;
