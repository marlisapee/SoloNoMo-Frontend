import React from 'react';
import useUserTrips from '../hooks/user/useUserTrips';
import AppCard from '../components/common/AppCard';
import { Colors, Images } from '../config';
import AllUserTripsList from '../components/lists/AllUserTripsList';
import Header from '../components/common/Header';
import { TbPlaneDeparture } from 'react-icons/tb';

const MyTripsView = ({ userId }) => {
  const { userTrips, loading, error } = useUserTrips(userId);

  return (
    <div>
      <Header
        text={'Your trips!'}
        icon={TbPlaneDeparture}
        iconColor={Colors.aquamarine}
        color={Colors.honeyDew}
      />
      <AllUserTripsList userId={userId} />
    </div>
  );
};

export default MyTripsView;
