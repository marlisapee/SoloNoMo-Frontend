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
} from '@chakra-ui/react';
import React from 'react';
import { Colors, Images } from '../../config';

const AppCard2 = ({
  heading,
  description,
  numParticipants,
  hostFirstName,
  hostLastName,
}) => {
  const handleParticipate = () => {};
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
            onClick={handleParticipate}
          >
            Express Interest
          </Button>
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
