import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Image,
  Avatar,
  Button,
} from '@chakra-ui/react';
import { BsHearts, BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi';
import { Colors } from '../../config';
import { Link } from 'react-router-dom';

const AppCard = ({
  tripId,
  tripCreatorName,
  tripCreatorImg,
  tripDestination,
  tripDescription,
  tripImage,
}) => {
  return (
    <Card maxW="xs" bg={Colors.cerulean} style={{ marginBottom: '20px' }}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar bgColor={Colors.white} size="lg" src={tripCreatorImg} />
            <Box>
              <Heading size="md">{tripCreatorName}</Heading>
              <Text fontWeight="700">Destination: {tripDestination}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{tripDescription}</Text>
      </CardBody>
      <Link to={`/trips/${tripId}`}>
        <Box height="200px" width="100%" overflow="hidden">
          <Image
            src={tripImage}
            alt="trip image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      </Link>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<BsHearts fontSize={'30px'} color={Colors.redPantone} />}
        >
          Favorite
        </Button>
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<BiShare fontSize={'30px'} color={Colors.aquamarine} />}
        >
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AppCard;
