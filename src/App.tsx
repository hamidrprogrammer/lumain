import React from 'react';
import AppRouter from './AppRouter';
import GlobalStyles from './GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};

export default App;
