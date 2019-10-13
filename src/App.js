import React from 'react';

import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
//import logo from './logo.svg';
//import './App.css';

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
