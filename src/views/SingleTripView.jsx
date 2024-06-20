import React from 'react';
import { useParams } from 'react-router-dom';
import useOneTrip from '../hooks/trip/useOneTrip';
import useTripParticipants from '../hooks/trip/useTripParticipants';
import AppSpinner from '../components/common/AppSpinner';
import AppCard2 from '../components/common/AppCard2';
import ParticipantCard from '../components/common/ParticipantCard';
import { SimpleGrid, Box, useBreakpointValue } from '@chakra-ui/react';
import { GiFootTrip } from 'react-icons/gi';
import Header from '../components/common/Header';
import { Colors } from '../config';
import { useUser } from '../context/UserContext';

const SingleTripView = () => {
  const { tripId } = useParams();
  const { currentTrip, loading, error } = useOneTrip(tripId);
  const { participants, getParticipants } = useTripParticipants(tripId);
  const { user } = useUser();

  const columns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <>
      <Header
        text={`Trip to ${currentTrip?.destination} with ${currentTrip?.userFirstName}`}
        size={'2xl'}
        icon={GiFootTrip}
        iconColor={Colors.redPantone}
      />
      <Box width="100%" padding={50}>
        {loading && <AppSpinner />}

        {currentTrip && (
          <SimpleGrid columns={columns} spacing={10} width="100%">
            <Box>
              <AppCard2
                userId={user.id}
                tripId={currentTrip.tripId}
                heading={currentTrip.destination}
                description={currentTrip.description}
                numParticipants={participants?.length}
                hostFirstName={currentTrip.userFirstName}
                hostLastName={currentTrip.userLastName}
                refetch={getParticipants}
              />
            </Box>
            <Box>
              {!participants ? (
                <p>No participants...</p>
              ) : (
                <SimpleGrid columns={1} spacing={10}>
                  {participants &&
                    participants.length > 0 &&
                    participants.map((person, index) => (
                      <ParticipantCard
                        key={index}
                        userFirstName={person.participantFirstName}
                        userLastName={person.participantLastName}
                        userEmail={person.participantEmail}
                      />
                    ))}
                </SimpleGrid>
              )}
            </Box>
          </SimpleGrid>
        )}
      </Box>
    </>
  );
};

export default SingleTripView;
