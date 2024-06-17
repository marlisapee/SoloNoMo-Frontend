import React, { useEffect, useState } from 'react';
import AppCard from '../common/AppCard';
import { getAllTrips } from '../../services/tripService';
import { Images } from '../../config';
import useTrips from '../../hooks/trip/useTrips';
import { Spinner } from '@chakra-ui/react';

const AllTripsList = () => {
  const { trips, error, loading } = useTrips();

  if (loading) return <Spinner size="xl" color="red.500" />;

  return (
    <div id="all-trips-list-container">
      {trips ? (
        trips.map((trip, index) => (
          <AppCard
            tripId={trip.tripId}
            tripCreatorUserId={trip.userId}
            tripCreatorName={trip.userFirstName + ' ' + trip.userLastName}
            tripCreatorImg={Images.logoImg}
            tripDestination={trip.destination}
            tripDescription={trip.description}
            tripImage={Images.tripOne}
            key={index}
          />
        ))
      ) : (
        <p>No trips posted...</p>
      )}
    </div>
  );
};

export default AllTripsList;
