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

  //const date = new Date();
  const date = new Date(2018, 6, 31, 22);
  const hours = date.getHours();

  let timeOfDay;
  
  const styles = {
    backgroundColor: "#CDDC39",
    fontSize: "30px"
  };

  if(hours < 12) {
    timeOfDay = "morning";
    styles.color = "lightGreen";
  } 
  else if (hours >= 12 && hours <= 18) {
    timeOfDay = "afternoon";
    styles.color = "blue"
  } 
  else {
    timeOfDay = "night";
    styles.color = "maroon";
  }

  return (
    // parent/ child components
    // <div>
    //   <Header />
    //   <MainContent />
    //   <Footer />
    // </div>

    // // inline styles with styles property
    <h1  style={styles}>Good {timeOfDay}!</h1>
  );
}

export default App;
