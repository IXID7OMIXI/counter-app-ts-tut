import React from 'react';
import bg from './pic/bg-gif.gif';
import Counter from './components/counter';
import Running from './components/running';

function Top() {
  return (
    <h1 className='pixel-letters'>  
        Counter App
    </h1>
  );
}
function Main()

{
  return (
    <div
      className='bg-main'
      style={{ backgroundImage: `url(${bg})`}}>
      
      <Top />
      <Counter />
      <Zooming />
      
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