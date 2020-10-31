import React, { Component } from 'react';
import ColorNumber from './solution-day-7/ColorNumber';
import Event from './solution-day-11/Event';
import OnMouseEnter from './solution-day-11/OnMouseEnter';
import EventExample from './solution-day-11/EventExample'
import me from './images/me.jpg';
import html from './images/hrml.jpg';
import css from './images/css.jpg';
import js from './images/js.png';
import react from './images/react.png';


import './App.css';

class App extends Component{ 
  render() 
  { 
      return (
      
      <div>
     
      <Event/>
      <OnMouseEnter/>
      < EventExample/>
      </div>); 
  } 
} 

export default App;
