import React from 'react';

import ListCard from '../common/ListCard';
import useTravelers from '../../hooks/user/useTravelers';
import AppSpinner from '../common/AppSpinner';
import { SimpleGrid } from '@chakra-ui/react';

const AllUsersList = () => {
  const { travelers, loading, error } = useTravelers();

  if (loading) return <AppSpinner />;

  return (
    <div style={{ padding: '20px' }}>
      <SimpleGrid columns={3} spacing={10}>
        {travelers &&
          travelers.map((traveler) => (
            <ListCard
              userFirstName={traveler.firstName}
              userLastName={traveler.lastName}
              userTripCount={traveler.tripCount}
              userProfileImg
              key={traveler.id}
            />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default AllUsersList;
