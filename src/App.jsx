import { useState, useEffect } from 'react';
import './assets/App.css';
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthView from './views/AuthView';
import { useUser } from './context/UserContext';

function App() {
  const [users, setUsers] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <>
      <Routes>
        {user ? (
          <Route path="/" element={<HomeView />} />
        ) : (
          <Route
            path="/"
            element={<AuthView setLoggedInUser={setLoggedInUser} />}
          />
        )}
      </Routes>
    </>
  );
}

export default App;
