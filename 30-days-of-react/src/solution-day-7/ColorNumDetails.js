import React, { Component } from 'react';

class ColorNumDetails extends Component{
 
   constructor(props){
       super(props)
   }
     
   // make a square
   
    Square ( color, number ) {
    const styles = {
      square: {
        width: "150px",
        height: "120px",
        background: color,
        float:'left',
        textAlign: "center",
        border: "2px solid #fff",
        color: "#fff",
        fontWeight: "500",
        fontSize: "24px",
      
      }
    }
  
    return (
      <div style={styles.square} ><span style={{ marginTop:'40px',display:'inline-block', height:'100%' }}>{number}</span></div>
    )
  }
       
    
  // to create prime number
      isPrime(num) {
                for ( var i = 2; i < num; i++ ) {
                    if ( num % i === 0 ) {
                        return false;
                    }
                     }
                if(num===1)
                {
                  return false;
                }
                return true;
            }
   

      createElements(n){
        var elements = [];
        for( let i =0; i < n; i++){
           elements.push(( () => {
                          if (i%2===0  ) {
                            console.log(this.props.color);
                            return this.Square(this.props.color[0], i) ;
                          }else if(this.isPrime(i)) {
                            console.log("this has to be red");
                             return this.Square(this.props.color[1], i) ;
                            }   else{ 
                              return this.Square(this.props.color[2], i) ;
                            }  
                        } ) ())         
                     }
        return elements;
    }




  render() {
        return (
          <div> 
            <div style={{margin:'0 auto', overflow:'hidden'}}> 
              <h1 style={{textAlign:'center'}} > 30 days of react</h1>
              <p style={{textAlign:'center'}} > Number Generator </p>
              <li style={{listStyle:'none'}}>{this.createElements(32)} </li>
            </div>
        
          </div>   
        );
      }
  } 

  export default ColorNumDetails;