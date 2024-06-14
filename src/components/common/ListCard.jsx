import React from 'react';
import {
  Card,
  CardHeader,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Avatar,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ListCard = ({
  userFirstName,
  userLastName,
  userTripCount,
  userProfileImg,
}) => {
  return (
    <>
      <Card maxW="lg">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar src={userProfileImg} />

              <Box>
                <Heading size="sm">
                  {userFirstName + ' ' + userLastName}
                </Heading>
                <Text>Trip Count: {userTripCount}</Text>
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
      </Card>
    </>
  );
};

export default ListCard;
