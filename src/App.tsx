import React from 'react';
import Routes from './components/router/routes';
import { Router } from 'react-router-dom';
import history from './utils/history';
import ErrorBoundary from 'components/errorBoundaries/errorBoundary';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Router history={history}>
          <Routes></Routes>
        </Router>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;
