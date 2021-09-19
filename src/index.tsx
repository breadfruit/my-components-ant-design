/*
 * @Author: 翁佳琪
 * @Descripttion: 
 * @version: 
 * @Date: 2021-09-19 00:37:22
 * @LastEditors: 
 * @LastEditTime: 2021-09-19 19:13:49
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
