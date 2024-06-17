import React from 'react';
import SearchBar from '../components/common/SearchBar';
import Header from '../components/common/Header';
import AllTripsList from '../components/lists/AllTripsList';
import { useUser } from '../context/UserContext';
import { Colors } from '../config';

const HomeView = () => {
  const { user } = useUser();
  return (
    <>
      <Header
        color={Colors.aquamarine}
        text={`Welcome back, ${user.firstName}! `}
        size={'2xl'}
        img={false}
      />
      <div id="home-view-header-search-bar-container">
        <Header color={Colors.honeyDew} text="Where to next?" />
        <SearchBar placeholderText="Places to go..." />
      </div>
      <div style={{ padding: '40px' }}>
        <AllTripsList />
      </div>
    </>
  );
};

export default HomeView;
