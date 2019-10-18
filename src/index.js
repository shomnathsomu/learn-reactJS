import React from 'react';
import ReactDOM from 'react-dom';
// import MyApp from './components/MyApp';
// import * as serviceWorker from './serviceWorker';

// import Joker from './Joker';
// import Contact from './Contact';
// import App from './App';

import './index.css';
import Todo from './Todo';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>Hello World, Man!! </h1>, document.getElementById('root'));

ReactDOM.render(
    <Todo />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
