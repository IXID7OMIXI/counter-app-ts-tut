import React, { useState, useEffect } from 'react';
import runner from '../pic/running.gif';

function getRandomDelay(min = 2000, max = 6000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Runing() {  //tbh i've no idea how this is working
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    const delay = getRandomDelay();
    const timer = setTimeout(() => {
      setRunKey(k => k + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [runKey]); 

  return (
    <div
      style={{
        width: '100vw',
        height: '240px',
        position: 'fixed',
        left: 0,
        bottom: 0,
        pointerEvents: 'none',
      }}
    >
      <img
        key={runKey}
        src={runner}
        alt="Running"
        style={{
          position: 'absolute',
          left: 0,
          bottom: '0px',
          height: '240px',
          animation: 'runAcross 3s linear forwards',
        }}
      />
      <style>
        {`
          @keyframes runAcross {
            0% { left: -150px; }
            100% { left: 100vw; }
          }
        `}
      </style>
    </div>
      );
}


export default Runing;