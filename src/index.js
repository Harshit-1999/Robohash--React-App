import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tachyons.min.css';
import App from './containers/App';
// import App from './App';
// import Hello from './Hello';
import * as serviceWorker from './serviceWorker';
import {robots} from './robots';
// import CardList from './CardList';


ReactDOM.render(
  <App/>
  ,document.getElementById('root')
);



  // highlight-next-line


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
