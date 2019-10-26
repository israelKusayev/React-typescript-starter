import React from 'react';
import Routes from './components/router/routes';
import { Router } from 'react-router-dom';
import history from './utils/history';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router history={history}>
        <Routes></Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
