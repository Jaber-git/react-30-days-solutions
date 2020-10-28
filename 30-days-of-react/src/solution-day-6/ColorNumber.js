import React, { Component } from 'react';

class ColorNumber extends Component{
 
   
     
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
   

        // numberGenerator= n=>{
        //   for( let i =0; i < n; i++){
        //    let elements=[];
        //     elements.push(<li style={{backgroundColor:  (() => {
        //                    if (i%2===0  ) {
        //                      console.log("this has to be green");
        //                      return 'green';
        //                    } else if(this.isPrime(i)) {
        //                      console.log("this has to be red");
        //                      return 'red'; 
        //                     } 
        //                     else{ 
        //                       return 'yellow';
        //                     } 
        //                  })(),
        //               padding:10, display:'inline', margin:4 }} > { i } </li>);
                      
        //    }
        // }

      createElements(n){
        var elements = [];
        for( let i =0; i < n; i++){
           elements.push(( () => {
                          if (i%2===0  ) {
                            console.log("this has to be green");
                            return this.Square('green', i) ;
                          }else if(this.isPrime(i)) {
                            console.log("this has to be red");
                             return this.Square('red', i) ;
                            }   else{ 
                              return this.Square('yellow', i) ;
                            }  
                        } ) ())         
                     }
        return elements;
    }

//Generate hexadecimal color


SquareForHex ( color ) {
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
    <div style={styles.square} > <span style={{ marginTop:'40px',display:'inline-block', height:'100%' }}>{color}</span> </div>
  )
}
//hexadecimal color generator
 hexColor = () => {
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



createElementsForHex(n){
  var elements = [];
  for( let i =0; i < n; i++){
     elements.push(( () => {              
                  
                      return this.SquareForHex(this.hexColor()) ;
                   
                  } ) ())         
               }
  return elements;
}
//world population
CountryPopulation = ( totalWorld, country, population  )  => {

  const countryBarWidth = `${population / totalWorld * 100}%`

  const styles = {
    bar: {
      height: "30px",
      marginTop: "0.2rem",
      marginBotom: "0.2rem",
      display:'flex',

    },
    countryName: {
      width: "15%",
      textTransform: "uppercase",
      fontWeight: "700",
    },
    countryBar: {
      width: "75%",
      paddingRight: "1rem"
    },
    countryBarColor: {
      backgroundColor: "#FFA500",
      width: countryBarWidth,
      height: "20px",
    },
    countryPopulation: {
      width: "20%",
      fontWeight: "500",
    },
  }

   let formatedPopulation = new Intl.NumberFormat().format(population)

  return (
    <div style={styles.bar} className="d-flex ">
      <div style={styles.countryName} className="">{country}</div>
      <div style={styles.countryBar} className="">
        <div style={styles.countryBarColor} ></div>
      </div>
      <div style={styles.countryPopulation} className="">{formatedPopulation}</div>
    </div>
  )
}

  //  For World population
  //  For World population
 
  
     countryList=()=>{
     let tenHighestPopulation = [
        { country: 'World', population: 7693165599 },
        { country: 'China', population: 1377422166 },
        { country: 'India', population: 1295210000 },
        { country: 'USA', population: 323947000 },
        { country: 'Indonesia', population: 258705000 },
        { country: 'Brazil', population: 206135893 },
        { country: 'Pakistan', population: 194125062 },
        { country: 'Nigeria', population: 186988000 },
        { country: 'Bangladesh', population: 161006790 },
        { country: 'Russia', population: 146599183 },
        { country: 'Japan', population: 126960000}
          ]
     let countriesList = []
     let totalWorld = tenHighestPopulation[0].population
      tenHighestPopulation.map((country, inx) => {
        return countriesList.push(
          <div >{this.CountryPopulation(totalWorld, country.country,country.population)}  </div >
        )
      })
      return countriesList;
     }
   

  render() {
        return (
          <div> 
            <div style={{margin:'0 auto', overflow:'hidden'}}> 

              <h1 style={{textAlign:'center'}} > 30 days of react</h1>
              <p style={{textAlign:'center'}} > Number Generator </p>
              <li style={{  listStyle:'none'}}>{this.createElements(32)} </li>

            </div>
            <div > 

                 <div style={{margin:'10px 10px', overflow:'hidden'}}> 
                   
                  <h1 style={{textAlign:'center'}} > 30 days of react</h1>
                  <p style={{textAlign:'center'}} > Number Generator </p>
                
                   <li style={{  listStyle:'none'}}>{this.createElementsForHex(32)} </li>
                  </div>
                 
                  <div style={{margin:'10px 10px', overflow:'hidden'}}> 
                   
                  <h1 style={{textAlign:'center'}} > 30 days of react</h1>
                  <p style={{textAlign:'center'}} > World population </p>
                
                   <li style={{  listStyle:'none'}}>{this.countryList()} </li>
                  </div>
            </div>
          </div>   
        );
      }
  } 

  export default ColorNumber;