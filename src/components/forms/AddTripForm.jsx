import React, { useState } from 'react';
import { createTrip } from '../../services/tripService';
import { useUser } from '../../context/UserContext';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  useDisclosure,
  Box,
  CloseButton,
} from '@chakra-ui/react';

const AddTripForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { user } = useUser();

  const handleAddTrip = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior
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
      onOpen(); // Use onOpen to display the alert
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
    <div>
      {isOpen && (
        <Alert status="success">
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
        <label>Destination: </label>
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          type="text"
        />
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Trip!</button>
      </form>
    </div>
  );
};

export default AddTripForm;
