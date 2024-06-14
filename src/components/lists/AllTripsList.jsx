import React, { useEffect, useState } from 'react';
import { getAllTrips } from '../../services/tripService';
import AppCard from '../common/AppCard';
import { Images } from '../../config';

const AllTripsList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        const trips = await getAllTrips();
        setTrips(trips);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllTrips();
  }, []);

  return (
    <div id="all-trips-list-container">
      {trips ? (
        trips.map((trip, index) => (
          <AppCard
            tripCreatorName={trip.userFirstName + ' ' + trip.userLastName}
            tripCreatorImg={Images.logoImg}
            tripDestination={trip.destination}
            tripDescription={trip.description}
            tripImage={Images.logoImg}
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
