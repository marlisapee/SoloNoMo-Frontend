import React from 'react';
import AppCard from '../common/AppCard';
import useUserTrips from '../../hooks/user/useUserTrips';
import { Images } from '../../config';
import { SimpleGrid } from '@chakra-ui/react';

const AllUserTripsList = ({ userId }) => {
  const { userTrips, loading, error } = useUserTrips(userId);

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <SimpleGrid columns={3} spacing={10}>
        {userTrips &&
          userTrips.map((trip, index) => (
            <AppCard
              key={index}
              tripCreatorName={trip.userFirstName}
              tripDescription={trip.description}
              tripDestination={trip.destination}
              tripImage={Images.tripTwo}
              tripCreatorImg={Images.userImg}
            />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default AllUserTripsList;
