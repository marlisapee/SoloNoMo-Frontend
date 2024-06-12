import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { getAllTrips } from '../services/tripService';
import Header from '../components/common/Header';
import { Colors } from '../config/colors';

const HomeView = () => {
  const [trips, setTrips] = useState([]);
  const { setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

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
    <>
      <Header color={Colors.aquamarine} text="Latest Trips" />
      <div>
        {trips ? (
          trips.map((trip, index) => <p key={index}>{trip.destination}</p>)
        ) : (
          <p>No trips posted...</p>
        )}
      </div>
      <div>HomeView</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default HomeView;
