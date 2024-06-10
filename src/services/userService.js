import axios from 'axios';

export const loginUser = async ({ email, password }) => {
  try {
    console.log('inside client service: ', email, password);
    const response = await axios.post('/api/users/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('failed to login...', error);
    throw error;
  }
};
