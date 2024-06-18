import { useEffect, useState } from 'react';
import { getUserTrips } from '../../services/tripService';

const useUserTrips = (userId) => {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const findUserTrips = async () => {
      try {
        setLoading(true);
        const trips = await getUserTrips(userId);
        setUserTrips(trips);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
    findUserTrips();
  }, []);

  return { userTrips, loading, error };
};

export default useUserTrips;
