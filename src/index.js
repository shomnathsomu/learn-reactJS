import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<h1>Hello World, Man!! </h1>, document.getElementById('root'));

function MyApp() {
    return (
        <div>
            <h1>Country List</h1>
            <p>Some country names are following below:</p>
            <ul>
                <li>Bangladesh</li>
                <li>Thailand</li>
                <li>Japan</li>
            </ul>
            <p>There are some fruits list: </p>
            <ol>
                <li>Banana</li>
                <li>Orange</li>
                <li>Papaya</li>
            </ol>
        </div>
    )
}

// 


ReactDOM.render(
    <MyApp />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
