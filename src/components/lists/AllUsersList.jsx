import React, { useEffect, useState } from 'react';

import { getAllUsers } from '../../services/userService';
import ListCard from '../common/ListCard';
import { getAllTrips } from '../../services/tripService';

const AllUsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allTripsUsers = await getAllTrips();
        setUsers(allTripsUsers);
      } catch (error) {
        console.error('error fetching users', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {users &&
        users.map((user) => (
          <ListCard
            userFirstName={user.userFirstName}
            userLastName={user.userLastName}
            userTripCount={user.userTripCount}
            userProfileImg
          />
        ))}
    </>
  );
};

export default AllUsersList;
