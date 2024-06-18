import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../config';

const ParticipantCard = ({ userFirstName, userLastName, userEmail }) => {
  return (
    <Card height="max-content" maxW={'500px'} width="100%">
      <CardHeader display="flex" alignItems="center">
        <Avatar />
        <Box ml={4}>
          <Heading size="md" color={Colors.aquamarine}>
            {userFirstName} {userLastName}
          </Heading>
          <Text>{userEmail}</Text>
        </Box>
      </CardHeader>
      <Button color={Colors.black} bgColor={Colors.cerulean} mt={4}>
        View Profile
      </Button>
    </Card>
  );
};

export default ParticipantCard;
