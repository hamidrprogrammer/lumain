// App.tsx
import React, { useState, useEffect } from 'react';
import AppRouter from './AppRouter';
import GlobalStyles from './GlobalStyles';

const correctUsername = "admin";
const correctPassword = "hamretisd45951ww2354ads";

const App: React.FC = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('authorized');

    if (storedAuth === 'true') {
      setAuthorized(true);
      return;
    }

    const askCredentials = () => {
      const username = prompt("Enter username:");
      const password = prompt("Enter password:");

      if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('authorized', 'true');
        setAuthorized(true);
      } else {
        alert("Username or password is incorrect!");
        askCredentials();
      }
    };

    askCredentials();
  }, []);

  if (!authorized) return null;

  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};

export default App;
