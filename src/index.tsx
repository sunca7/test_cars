import React from 'react';
import ReactDom from 'react-dom'
import "./index.css";
import App from './App';

window.React = React

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactAnchor');

  ReactDom.render(<App />, container)
});
