import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, useLocation } from 'react-router-dom';
import {
  Berita,
  FallbackPage,
  FormPengajuan,
  InfoUmum,
  LandingPage,
  NotFound,
} from './pages';
import BeritaDetails from './pages/berita-details';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  }, [pathname]);
  return (
    <div className="App">
      <Helmet>
        <title>Desa Teluk Jambe | Platform Administrasi Publik</title>
        <meta
          name="description"
          content="Platform online untuk mempermudah administrasi publik Desa Teluk Jambe, Kabupaten Karawang"
        />
      </Helmet>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/form" exact component={FormPengajuan} />
        <Route path="/berita" exact component={Berita} />
        <Route path="/informasi-umum" exact component={InfoUmum} />
        <Route path="/berita/:id" exact component={BeritaDetails} />
        <Route path="/fallback" exact component={FallbackPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
