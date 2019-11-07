import React from "react";
import ReactDOM from "react-dom";

// ======= imported Component ========
// import React, {Component} from "react";

// import MyApp from './components/MyApp';
// import * as serviceWorker from './serviceWorker';

// import Joker from './Joker';
// import Contact from './Contact';
//import App from './App';

import './index.css';
// import Todo from './Todo';
// import App from "./App";
// import Events from "./Events";
// import Count from './Count';
// import Forms from './Forms'
 import FormPractice from "./FormPractice";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>Hello World, Man!! </h1>, document.getElementById('root'));

//======= Class based components practice======//\
// class App extends React.Component {
//     render() {
//         return(
//             <div>
//                 <Header username="Crimson" />
//                 <Greeting />
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render() {
//         return(
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )
//     }
// }

// class Greeting extends Component {
//     render() {
//         const date = new Date();
//         const hours = date.getHours();
    
//         let timeOfDay;
        
//         if(hours < 12) {
//             timeOfDay = "morning";
//         } else if (hours >= 12 && hours <17) {
//             timeOfDay = "afternoon";
//         } else {
//             timeOfDay = "night";
//         }
//         return(
//             <h1>Good {timeOfDay} to you, Sir / Madam.</h1>
//         )
//     }
// }
//======= Class based components practice end======//\

ReactDOM.render(
    <FormPractice />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
