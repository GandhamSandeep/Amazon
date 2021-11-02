import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sandeep1 from './sandeep'
import Signin1 from './signin'
import Create from './create'




ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Sandeep1 /> */}
    {/* <Signin1 /> */}
    {/* <Create /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
