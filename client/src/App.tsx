import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import {
  Berita,
  FallbackPage,
  FormPengajuan,
  InfoUmum,
  LandingPage,
} from './pages';
import BeritaDetails from './pages/berita-details';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  }, [pathname]);
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
