import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeView from './views/HomeView';
import AuthView from './views/AuthView';
import { useUser } from './context/UserContext';
import './assets/App.css';
import NavBar from './components/common/NavBar';
import TravelersView from './views/TravelersView';
import AddTripView from './views/AddTripView';

const App = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, [setUser]);

  return (
    <>
      {user && <NavBar />}
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<HomeView />} />
            <Route path="/travelers" element={<TravelersView />} />
            <Route path="/createatrip" element={<AddTripView />} />
          </>
        ) : (
          <Route path="/" element={<AuthView />} />
        )}
      </Routes>
    </>
  );
};

export default App;
