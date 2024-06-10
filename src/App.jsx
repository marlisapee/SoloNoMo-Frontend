import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './assets/App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
