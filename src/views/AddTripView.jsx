import React from 'react';
import AddTripForm from '../components/forms/AddTripForm';
import Header from '../components/common/Header';
import { Colors } from '../config';
import { GiCommercialAirplane } from 'react-icons/gi';

const AddTripView = () => {
  return (
    <div>
      <Header
        color={Colors.honeyDew}
        img={false}
        icon={GiCommercialAirplane}
        iconColor={Colors.aquamarine}
        size={'2xl'}
        text="Post a trip!"
      />
      <AddTripForm />
    </div>
  );
};

export default AddTripView;
