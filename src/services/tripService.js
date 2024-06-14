import axios from 'axios';

export const getAllTrips = async () => {
  try {
    const response = await axios.get('/api/trips');
    console.log('response data: ', response.data);
    return response.data;
  } catch (error) {
    console.error('failed to fetch all trips...', error);
  }
};

export const createTrip = async ({
  userId,
  destination,
  startDate,
  endDate,
  description,
}) => {
  try {
    const response = await axios.post('/api/trips', {
      userId,
      destination,
      startDate,
      endDate,
      description,
    });
    console.log('response data: ', response.data);
    return response.data;
  } catch (error) {
    console.error('failed to create a trip...', error);
  }
};
