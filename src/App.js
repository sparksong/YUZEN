import React from 'react';
import Navbar from './components/Navbar';
import Translation from './components/Translation';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>

        <h2>
          Yuzen Translation. (Under Construction)
        </h2>
      <Translation/>  
    </React.Fragment>
  );
}

export default App;
