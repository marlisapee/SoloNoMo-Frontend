import React, { useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  useDisclosure,
  Box,
  CloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

import { createTrip } from '../../services/tripService';
import { useUser } from '../../context/UserContext';

const AddTripForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { user } = useUser();

  const handleAddTrip = async (e) => {
    e.preventDefault();
    try {
      const trip = await createTrip({
        userId: user.id,
        destination,
        startDate,
        endDate,
        description,
      });
      console.log('trip: ', trip);
      clearForm();
      onOpen();
    } catch (error) {
      console.error('error: ', error);
    }
  };

  const clearForm = () => {
    setDestination('');
    setStartDate('');
    setEndDate('');
    setDescription('');
  };

  return (
    <Box p={4} maxWidth="500px" mx="auto">
      {isOpen && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your trip has been created successfully. Now we wait!
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      )}

      <form onSubmit={handleAddTrip}>
        <FormControl mb={4}>
          <FormLabel>Destination</FormLabel>
          <Input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Enter destination"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Start Date</FormLabel>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>End Date</FormLabel>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter trip description"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Create Trip!
        </Button>
      </form>
    </Box>
  );
};

export default AddTripForm;
