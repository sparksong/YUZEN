import React from 'react';
import Navbar from './components/Navbar';
import Translation from './components/Translation';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>

        <h2>
          Yuzen Translation. (Under Construction)
        </h2>
      <Welcome/> 
      <Translation/> 
    </React.Fragment>
  );
}

export default App;
