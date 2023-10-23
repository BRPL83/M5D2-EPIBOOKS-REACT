import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './MyNav';
import Welcome from './Welcome';
import LatestRelease from './LatestRelease';
import MyFooter from './MyFooter';

function App() {
  return (
    <>
      <MyNav/>
      <Welcome/>
      <LatestRelease/>
      <MyFooter/>
    </>
  );
}

export default App;
