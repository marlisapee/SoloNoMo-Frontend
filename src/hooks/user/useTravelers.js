import { getAllUsers } from '../../services/userService';

import { useState, useEffect } from 'react';

const useTravelers = () => {
  const [travelers, setTravelers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTravelers = async () => {
      try {
        setLoading(true);
        const getUsers = await getAllUsers();
        setTravelers(getUsers);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
    fetchTravelers();
  }, []);

  return { travelers, loading, error };
};

export default useTravelers;
