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
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare, BiHeart } from 'react-icons/bi';
import { Colors } from '../../config';

const AppCard = ({
  tripCreatorName,
  tripCreatorImg,
  tripDestination,
  tripDescription,
  tripImage,
}) => {
  return (
    <>
      <Card maxW="xs" bg={Colors.cerulean} style={{ marginBottom: '20px' }}>
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar size="lg" src={tripCreatorImg} />

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
        <Image objectFit="cover" src={tripImage} alt="trip image" />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiHeart />}>
            Favorite
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AppCard;
