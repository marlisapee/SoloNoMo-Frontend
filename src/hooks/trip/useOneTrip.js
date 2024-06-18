import { useEffect, useState } from 'react';
import { getOneTrip } from '../../services/tripService';

const useOneTrip = (id) => {
  const [currentTrip, setCurrentTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getTrip = async () => {
      try {
        setLoading(true);
        const trip = await getOneTrip(id);
        setCurrentTrip(trip);
        setLoading(false);
      } catch (error) {
        console.error('error', error);
        setError(error.message);
        throw error;
      }
    };

    getTrip();
  }, []);

  return { currentTrip, loading, error };
};

export default useOneTrip;
