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
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>
        </div>
    )
}

ReactDOM.render(
    <MyApp />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
