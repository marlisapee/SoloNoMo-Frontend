import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneTrip } from '../services/tripService';

const SingleTripView = () => {
  const { tripId } = useParams();
  const [currentTrip, setCurrentTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const trip = await getOneTrip(tripId);
        setCurrentTrip(trip);
        console.log('current trip: ', trip);
      } catch (error) {
        console.error('error fetching trip data', error);
      }
    };
    fetchTrip();
  }, []);

  return <div>{currentTrip && <p>{currentTrip.destination}</p>}</div>;
};

export default SingleTripView;
