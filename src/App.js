import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

//import logo from './logo.svg';
//Importing CSS 
import './App.css';

function App() {
  return (
    // parent/ child components
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
