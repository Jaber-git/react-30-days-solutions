import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class OnMouseEnter extends Component{
   

     constructor(props) {
         super(props)
         this.state={
             bgcolor:'green'
         }
       
     }

    movingBlock(color){
        const styles = {
            rect: {
              width: "400px",
              height: "100px",
              background:color,
              textAlign: "center",
              border: "2px solid #fff",
              color: "#fff",
              fontWeight: "500",
              fontSize: "24px",
              transform:"translate",
              
            
            }
          }
        return (
            <div style={styles.rect}>
                <h1>30 days of  react</h1>
            </div>
        )
    }

        handleMouse = e=> {
       let color=['green','red','yellow'];
  
        document.querySelector('body').style.backgroundColor="green"
        console.log('hello')
            
          }
     
    render(){

        return (
                <div  onMouseEnter={this.handleMouse}>
                    {this.movingBlock('red')}
                </div>
        )
    }


}
export default OnMouseEnter;