import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Translation from './components/Translation';
import Welcome from './components/Welcome';
import './App.css';
import Proofreading from './components/Proofreading';
import PresentationCoaching from './components/PresentationCoaching';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Translation />
      <Proofreading />
      <PresentationCoaching />
      <Footer />
    </>
  );
}

export default App;
