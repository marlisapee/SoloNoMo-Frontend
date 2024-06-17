import React from 'react';
import UpdateProfileForm from '../components/forms/UpdateProfileForm';
import Header from '../components/common/Header';

import { FaCog } from 'react-icons/fa';
import { Colors } from '../config';

const ProfileView = () => {
  return (
    <>
      <Header
        color={Colors.white}
        text="Profile Settings"
        size="2xl"
        icon={FaCog}
        iconColor={Colors.aquamarine}
      />
      <UpdateProfileForm />
    </>
  );
};

export default ProfileView;
