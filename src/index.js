import React from 'react';
import ReactDOM from 'react-dom';
// import App from './views/App'; did not need to import App into index.js
// import './index.js';
// import App from "./views/App";
// import reportWebVitals from './reportWebVitals';
import Home from './views/Home';
// import CardDeck from "react-bootstrap/CardDeck"; 
import Card from "./js/components/card";
import './Jumbo.css'; //needed to import the css for the image to display in jumbo
import './Cards.css';


ReactDOM.render(
  <React.StrictMode>
     <Home />
      {/* <Cards /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
