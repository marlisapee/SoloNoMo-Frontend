import { useEffect, useState } from 'react';
import { getTripParticipants } from '../../services/tripService';

const useTripParticipants = (tripId) => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getParticipants = async () => {
    try {
      setLoading(true);
      const users = await getTripParticipants(tripId);

      setParticipants(users);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
      throw error;
    }
  };

  useEffect(() => {
    getParticipants();
  }, []);

  return { participants, loading, error, getParticipants };
};

export default useTripParticipants;
