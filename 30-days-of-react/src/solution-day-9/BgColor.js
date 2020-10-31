import React, { Component } from 'react';


class BgColor extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
        bgColor: "green"
        }
       }

    boxClick = e => {
        e.preventDefault();
        console.log('Button clicked.');
        const bodyElt = document.querySelector("body");
             bodyElt.style.backgroundColor = 'red';
      };
       componentDidUpdate(prevProps, prevState){
         const { bgcolor } = this.state;
            console.log( bgcolor)
         if(prevProps.bgColor !== bgcolor){
             const bodyElt = document.querySelector("body");
             bodyElt.style.backgroundColor = bgcolor;
           }
        }
          render(){

            return ( 
                <div className="App">
                    <article className="experimentsHolder">
                    <button
                        className="boxClickCss"
                        onClick={this.boxClick} >
                        Click Me! </button>
                    </article>
                </div>
             );
          }
  } 

  export default BgColor;