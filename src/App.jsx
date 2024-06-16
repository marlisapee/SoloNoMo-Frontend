import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/common/NavBar';
import { useUser } from './context/UserContext';
import './assets/App.css';

import HomeView from './views/HomeView';
import AuthView from './views/AuthView';
import TravelersView from './views/TravelersView';
import AddTripView from './views/AddTripView';
import ProfileView from './views/ProfileView';
import SingleTripView from './views/SingleTripView';

const App = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, [user, setUser]);

  return (
    <>
      {user && <NavBar />}
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<HomeView />} />
            <Route path="/travelers" element={<TravelersView />} />
            <Route path="/createatrip" element={<AddTripView />} />
            <Route path="/profilesettings" element={<ProfileView />} />
            <Route path="/trip/:id" element={<SingleTripView />} />
          </>
        ) : (
          <Route path="/" element={<AuthView />} />
        )}
      </Routes>
    </>
  );
};

export default App;
