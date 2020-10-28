
const skills=[
    'HTML',
    'CSS',
    'React',
    'Python',
    'PHP',
    'Flusk',
    'Node js',
    'Vue',
    'Sass',
    'Bootstrap',
    'TwalineCss',
    'Laravel',
    'DOT Net',
    'Java',
    'Flusk',
    'Node js',
    'Vue',
    'Sass',
    'Bootstrap',
    'TwalineCss'
    ]
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
  
  //functional component
      const HexaColor = () => 
           <div style={{ }}> 
              <div style={{backgroundColor: hexColor(),
                padding: 25, } }> {hexColor()}</div> 
           </div>
          ;
  
  const headerStyles = {
    backgroundColor: '#61DBFB',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
    marginBottom:10,
    }
    const footerStyles = {
      backgroundColor: '#F2F2F2',
      fontFamily: 'Helvetica Neue',
      marginTop:10,
      padding: 25,
      lineHeight: 1.5,
      }
      //card
      const cardStyles = {
        backgroundColor: '#F2F2F2',
        fontFamily: 'Helvetica Neue',
        marginTop:10,
        padding: 10,
        textAlign:'left',
       
        }
    // JSX element, header
    const Header = ()=> {
    return <header style={headerStyles}>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
         
          <p>Asabeneh Yetayeh</p>
          <small>Oct 2, 2020</small>
      </div>
    </header>
  
          }
   //display image functional component
  const Techs= () => {
       return <div style={{margin:'10px 0 5px 0',backgroundColor:'#fafafa',}}>  
             <p style={{padding:' 10px ', }}>Front end technology</p>
               <img style={{padding:' 10px 0 10px 0', margin:10}} src={html} alt='mine image' width='120' height='150'/>
                <img style={{padding:' 10px 0 10px 0', margin:10}} src={css} alt='mine image' width='120' height='150'/>
                <img style={{padding:' 10px 0 10px 0', margin:10}} src={js} alt='mine image' width='120' height='150'/>
                <img style={{padding:' 10px 0 10px 0', margin:10}} src={react} alt='mine image' width='120' height='150'/>
             </div>
  }
  
  //create a functiona card component with props
       const Tag = props => {
         const skillList=props.skills.map(skill=> 
          <li style={{ color:'#ffffff', borderRadius:'10px', backgroundColor:'#2acfcf', padding:8, margin:'0 10px 10px 0' ,display:'inline-block'}}>{skill}</li>
        )
         return <ul style = {{width:'100%', paddingLeft:'4px'}}>{ skillList } </ul>;
       }
      const Card = () => {
        return ( <div style={cardStyles} className='header-wrapper'>
                    <div style={{  paddingLeft:'50px', }}> 
                      <img style={{padding:'8px', margin:10, borderRadius:'70px'}} src={me} alt='mine image' width='100' height='120'/>
                      <h2 style={{marginTop: '1.92px',marginBottom: '6.92px'}}>Jaber Hussain</h2>
                      <small  style={{marginBbottom: '6.92px'}}>Fullstake developer</small>
                    
                      <p >Skills</p>
                    
                      <Tag  skills={skills}  />
                    </div>
              </div>
        )
       }
  
  
   // JSX element, header
   const Footer = ()=> {
    return <header style={footerStyles}>
          <div className='footer-wrapper'>
                <h1>SUBSCRIBE</h1>
                <p>Sign up with your email to get news and updates</p>
              <form>
                <label style={{padding:2,marginLeft:5}}> 
                <input style={{padding:2,marginLeft:5,borderRadius:'8px'}} type="text" name="name" placeholder="First name" />
                  <input style={{padding:2,marginLeft:5,borderRadius:'8px'}} type="text" name="name"placeholder="Last name" />
                  <input style={{padding:2,marginLeft:5,borderRadius:'8px'}} type="text" name="name"placeholder="e-mail" />
                </label>
                <div style={{padding:10,marginTop:10}}>
                <input style={{padding:5 }} type="submit" value="Subscribe" /> 
                  </div>
                
              </form>
          </div>
    </header>
          }

       //   function App() {
       //     return (
       //       <div className="App" style={{margin:10}}>
       //        <Header/>
       //        <Techs/>
       //         <HexaColor/>
        //        <HexaColor/>
        //        <HexaColor/>
        //        <HexaColor/>
         //       <Card/>
         //       <Footer/>
         //     </div>
         //   );
         // }