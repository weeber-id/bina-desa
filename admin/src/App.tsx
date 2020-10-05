import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, Pengajuan } from './pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/pengajuan" exact component={Pengajuan} />
      </Switch>
    </div>
  );
}

export default App;
