import React from 'react';
import bg from './pic/bg-gif.gif';
import Counter from './components/counter';
import Running from './components/running';
import { CounterProps } from './components/counter';

function Top() {
  return (
    <h1 className='pixel-letters'>  
        Counter App
    </h1>
  );
}
function Main() {
  const counterProps: CounterProps = { initialValue: 0 };
  return (
    <div
      className='bg-main'
      style={{ backgroundImage: `url(${bg})`}}>
      
      <Top />
      <Counter {...counterProps} />
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