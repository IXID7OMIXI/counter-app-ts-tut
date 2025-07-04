import React from 'react';
import bg from './pic/bg-gif.gif';
import Counter from './components/counter';
import Running from './components/running';
function Top() {
  return (
    <h1
      style={{
        fontFamily: "'Press Start 2P",
        fontSize: 'clamp(2rem,8vw,100px)',
        textAlign:'center',
        margin:'0 0 32px 0',
         color: 'lime',
        textShadow: `
          -8px -8px 0 #000000,  
          8px -8px 0 #000000,
          -8px 8px 0 #000000,
          8px 8px 0 #000000,
          0px 8px 0 #000000,
          8px 0px 0 #000000,
          0px -8px 0 #000000,
          -8px 0px 0#000000
        `
      }}>  
        Counter App
    </h1>
  );
}
/*
function MBG() { //display background image in a seperate component
                  // This function is not used in the current implementation, but can be used if needed.
  return (
  <div 
  style={{
    display :'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }}>
    <img 
    src= {bg}
    style ={{width:'100%'}}  
  />  
    </div>
  );
}
  */
function Main()
{
  return (
    <div
    style={{
      backgroundImage: `url(${bg})`,
      width: "100%",
      display: 'flex',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <div>
      <Top />
      <Counter />
      <Zooming />
      </div>
    </div>
  );
}
function Zooming() {
  return (
    <div>
      <Running />
    </div>
  );
}
export default Main ;
export { Top, Zooming};