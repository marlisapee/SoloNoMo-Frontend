import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/common/NavBar';
import { useUser } from './context/UserContext';
import { ChakraProvider } from '@chakra-ui/react';

import HomeView from './views/HomeView';
import AuthView from './views/AuthView';
import TravelersView from './views/TravelersView';
import AddTripView from './views/AddTripView';
import ProfileView from './views/ProfileView';
import SingleTripView from './views/SingleTripView';
import FavoritesView from './views/FavoritesView';
import MyTripsView from './views/MyTripsView';
import theme from './config/theme';
import './assets/App.css';

const App = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, [user, setUser]);

  return (
    <ChakraProvider theme={theme}>
      {user && <NavBar />}
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<HomeView />} />
            <Route path="/travelers" element={<TravelersView />} />
            <Route path="/createatrip" element={<AddTripView />} />
            <Route path="/profilesettings" element={<ProfileView />} />
            <Route path="/trips/:tripId" element={<SingleTripView />} />
            <Route path="/myfavorites" element={<FavoritesView />} />
            <Route path="/mytrips" element={<MyTripsView />} />
          </>
        ) : (
          <Route path="/" element={<AuthView />} />
        )}
      </Routes>
    </ChakraProvider>
  );
};

export default App;
