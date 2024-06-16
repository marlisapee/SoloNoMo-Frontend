import axios from 'axios';

export const loginUser = async ({ email, password }) => {
  try {
    console.log('inside client service: ', email, password);
    const response = await axios.post('/api/users/login', {
      email,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('failed to login...', error);
    throw error;
  }
};

export const signUpUser = async ({
  firstName,
  lastName,
  email,
  password,
  profilePicture,
  bio,
}) => {
  try {
    console.log('inside service: ', firstName, email, password);
    const response = await axios.post('/api/users', {
      firstName,
      lastName,
      email,
      password,
      profilePicture,
      bio,
    });
    console.log('response: ', response.data);
    return response.data;
  } catch (error) {
    console.error('failed to sign up...', error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error) {
    console.error('failed to get users...', error);
    throw error;
  }
};

export const updateUserProfile = async ({
  id,
  firstName,
  lastName,
  email,
  profilePicture,
  password,
  bio,
}) => {
  try {
    const response = await axios.put(`/api/users/${id}`, {
      firstName,
      lastName,
      email,
      password,
      profilePicture,
      bio,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
