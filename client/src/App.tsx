import React from 'react';
import { Route } from 'react-router-dom';
import { FormPengajuan, LandingPage } from './pages';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/form" exact component={FormPengajuan} />
    </div>
  );
}

export default App;
