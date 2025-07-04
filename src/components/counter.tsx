import React from 'react';
import { useState } from 'react';

function Counter() {
  const [y, x] = useState<number>(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{
        fontSize: 'clamp(2rem,8vw,100px)',
        flexDirection: 'column',
        top: '10vh', 
         fontFamily: "'Press Start 2P'",
         color: 'lime',
         textShadow: `
          -8px -8px 0 #000000,  
          8px -8px 0 #000000,
          -8px 8px 0 #000000,
          8px 8px 0 #000000,
          0px 8px 0 #000000,
          8px 0px 0 #000000,
          0px -8px 0 #000000,
          -8px 0px 0 #000000 `
      }}>{y}</h1>
      <div style={{marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '50px' , fontFamily: "'Press Start 2P'"}}>
      <button
        className="pixel-button" 
            onClick={() => x(y + 1)}>Found it! </button>
      <button 
        className="pixel-button" 
            onClick={() => x(y - 1)}>i lied :( </button>
      </div>
    </div>
  );
}

export default Counter;

