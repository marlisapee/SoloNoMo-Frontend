import { useEffect, useState } from 'react';

const useCreateParticipant = ({ tripId, userId }) => {
  const [newParticipant, setNewParticipant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const createTripParticipant = async () => {
      try {
        setLoading(true);
        const participant = await createTripParticipant({ tripId, userId });
        set;
        setNewParticipant(participant);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error(error);
        throw error;
      }
    };
    createTripParticipant();
  }, []);

  return { newParticipant, loading, error };
};

export default useCreateParticipant;
