import React from 'react';
import AppCard from '../common/AppCard';
import { Images } from '../../config';
import useTrips from '../../hooks/trip/useTrips';
import AppSpinner from '../common/AppSpinner';

const AllTripsList = () => {
  const { trips, error, loading } = useTrips();

  if (loading) return <AppSpinner />;

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
