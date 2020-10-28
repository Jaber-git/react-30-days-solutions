import React, { Component } from 'react';

class ColorNumber extends Component{
 
    constructor(props) {
        super(props);
     
        this.state = {
          list: [1, 2, 3],
        };
      }
     
      onClearArray = () => {
        this.setState({ list: [] });
      };

      isPrime(num) {
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }
      createElements(n){
        var elements = [];
        for( let i =0; i < n; i++){
           elements.push(<span style={{backgroundColor:  (() => {
                          if (i%2=== 0 ) {
                            console.log("this has to be block");
                            return 'green';
                          } else if(this.isPrime(i)) {
                            console.log("this has to be none");
                            return 'red'; 
                           }  
                        })(),
           
                            padding:4}} > { i } </span>);
                     
          }
        return elements;
    }
    
    

      render() {
        return (
          <div>
            <ul>
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
     
            <button type="button" onClick={this.onClearArray}>
              Clear Array
            </button>

          
              <li>{this.createElements(20)} </li>
                
            

          </div>
         
        );
      }
  } 

  export default ColorNumber;