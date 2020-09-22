import React from 'react';
import { Route } from 'react-router-dom';
import { LandingPage } from './pages';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
    </div>
  );
}

export default App;
