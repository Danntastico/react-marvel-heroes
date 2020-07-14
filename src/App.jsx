import React from 'react';
import { HeroContext } from './context/HeroContext';
import { AppRouter } from './routes/AppRouter';

const App = () => {
  return (
    <HeroContext.Provider>
      <AppRouter />
    </HeroContext.Provider>
  );
};

export default App;
