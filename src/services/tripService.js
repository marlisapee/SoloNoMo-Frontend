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
