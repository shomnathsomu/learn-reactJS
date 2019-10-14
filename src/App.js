import React from 'react';

//import Header from './components/Header';
//import Footer from './components/Footer';
//import MainContent from './components/MainContent';

//import logo from './logo.svg';
//Importing CSS 
import './App.css';

function App() {

  //const firstName = "Alice";
  //const secondName = "Doe";

  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  if(hours < 12) timeOfDay = "morning";
  else if (hours >= 12 && hours <= 18) timeOfDay = "afternoon";
  else timeOfDay = "night";


  return (
    // parent/ child components
    // <div>
    //   <Header />
    //   <MainContent />
    //   <Footer />
    // </div>

    <h1>Good {timeOfDay}!</h1>
  );
}

export default App;
