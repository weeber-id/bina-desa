import React from 'react';
import { Route } from 'react-router-dom';
import {
  Berita,
  FallbackPage,
  FormPengajuan,
  InfoUmum,
  LandingPage,
} from './pages';
import BeritaDetails from './pages/berita-details';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/form" exact component={FormPengajuan} />
      <Route path="/berita" exact component={Berita} />
      <Route path="/informasi-umum" exact component={InfoUmum} />
      <Route path="/berita/:id" exact component={BeritaDetails} />
      <Route path="/fallback" exact component={FallbackPage} />
    </div>
  );
}

export default App;
