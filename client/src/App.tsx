import React from 'react';
import { Route } from 'react-router-dom';
import { Berita, FormPengajuan, LandingPage } from './pages';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/form" exact component={FormPengajuan} />
      <Route path="/berita" exact component={Berita} />
    </div>
  );
}

export default App;
