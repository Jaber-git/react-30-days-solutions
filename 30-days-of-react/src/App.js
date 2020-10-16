import React from 'react';
import logo from './logo.svg';
import './App.css';


//hexadecimal color generator

const hexColor = () => {
      let str='123456789abcdef';
      let color="";
      for (let i=0;i<6; i++){
        let index=Math.floor(Math.random() * str.length);
        color =color+str[index];
        console.log(color);
       
   }
   let colorCode ='#'+color;
     
   return colorCode;
    };


    const HexaColor = () => {
      let hexaStyles = {
        backgroundColor: hexColor() ,
            }
        console.log(hexaStyles.backgroundColor)
      
      return (  
        <div> 
           <div style={{backgroundColor: hexColor() } }> {hexColor()}</div>
           <div style={{backgroundColor: hexColor() } }> {hexColor()}</div>
           <div style={{backgroundColor: hexColor() } }> {hexColor()}</div>
           <div style={{backgroundColor: hexColor() } }> {hexColor()}</div>
         
                                      </div>
                          )};

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
  }
  // JSX element, header
  const header = (
  <header style={headerStyles}>
  <div className='header-wrapper'>
  <h1>Welcome to 30 Days Of React</h1>
  <h2>Getting Started React</h2>
  <h3>JavaScript Library</h3>
  <p>Asabeneh Yetayeh</p>
  <small>Oct 2, 2020</small>
  </div>
  </header>
        )

function App() {
  return (
    <div className="App">
      {header}
      <HexaColor/>
      
    </div>
  );
}

export default App;
