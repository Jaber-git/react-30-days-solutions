import React, { Component } from 'react';
import ColorNumber from './solution-day-6/ColorNumber';
import me from './images/me.jpg';
import html from './images/hrml.jpg';
import css from './images/css.jpg';
import js from './images/js.png';
import react from './images/react.png';


import './App.css';

class App extends Component{ 
  render() 
  { 
      return (<div><h2>Welcome to</h2> 
      <ColorNumber title="GeeksforGeeks" title2="jaber" /></div>); 
  } 
} 

export default App;
