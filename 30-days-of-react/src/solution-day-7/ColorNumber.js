import React, { Component } from 'react';
import ColorNumDetails from '../solution-day-7/ColorNumDetails.js';

class ColorNumber extends Component{

            constructor(props){
                super(props);
            }


  render() {
    let color=['green','red','yellow'];
        return (
          <div> 
           < ColorNumDetails color={color}/>
          </div>   
        );
      }
  } 

  export default ColorNumber;