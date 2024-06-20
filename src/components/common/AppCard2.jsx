import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Colors, Images } from '../../config';
import AppAlert from './AppAlert';
import { createParticipant } from '../../services/tripService';

const AppCard2 = ({
  heading,
  description,
  numParticipants,
  hostFirstName,
  hostLastName,
  tripId,
  userId,
  refetch,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleParticipate = async (e) => {
    e.preventDefault();
    try {
      await createParticipant({ tripId, userId });
      refetch();
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleFavorite = () => {};

  return (
    <Card maxW="lg" height="max-content" width="100%">
      <CardBody>
        <Image src={Images.tripTwo} alt="scenery" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="lg" color={Colors.honeyDew}>
            {heading}
          </Heading>
          <Heading size="md">
            {hostFirstName} {hostLastName}
          </Heading>
          <Text>{description}</Text>
          <Text color={Colors.aquamarine} fontSize="2xl">
            Participants: {numParticipants}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            bgColor={Colors.aquamarine}
            color={Colors.black}
            onClick={onOpen}
          >
            Express Interest
          </Button>
          <AppAlert
            isOpen={isOpen}
            onClose={onClose}
            alertHeader={'Join trip?'}
            alertBodyText={`Are you sure you want to send a participation request to ${hostFirstName}?`}
            handleClick={handleParticipate}
          />
          <Button
            variant="ghost"
            onClick={handleFavorite}
            color={Colors.aquamarine}
          >
            Add to Favorites
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default AppCard2;
