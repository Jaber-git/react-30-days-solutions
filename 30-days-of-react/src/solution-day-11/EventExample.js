import React , { Component} from 'react'
import './style.css';
class EventExample extends Component{
    constructor(props){
        super(props)

        this.state={
            counter:0,
        }
    }

    
    counter = (count) => {
        var textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold",
       
        }
        return ( <div>
                <div style={textStyle}>
                {count}
                </div>
        </div> )
      }

      increase= (e)=> {
        this.setState({
        counter: this.state.counter + 1,
            });
           
        }
    render(){
        var buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px",
            marginLeft:'100px',
            padding: '16px 0px 16px 0px',
            transition: "all ease .5s",
            "&a:hover": {
              backgroundColor: "red",
              color: "#ffffff"
            }
   
            };
        var backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center",
          
            };

        return (<div style={{  dispaly:'flex', alignItems:'center'}}>
               <div style={backgroundStyle}> {this.counter(this.state.counter)}</div>
               <button style={buttonStyle} onClick={this.increase}>+</button>
               <a  className='hover' href="http://www.google.com" >Google</a>
               </div>)
    }
}

export default EventExample