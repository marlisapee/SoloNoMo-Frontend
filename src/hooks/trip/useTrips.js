import React, { useEffect, useState } from 'react';
import { getAllTrips } from '../../services/tripService';

const useTrips = () => {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrips = async () => {
      try {
        setLoading(true);
        const findTrips = await getAllTrips();
        setTrips(findTrips);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrips();
  }, []);

  return { trips, error, loading };
};

export default useTrips;
