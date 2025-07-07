import React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';


function Counter() {
  const [y, x] = useState<number>(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className='pixel-letters'>{y}</h1>
        <Grid container  
        spacing={15}
        justifyContent="center">

            <button className="pixel-button"
                onClick={() => x(y + 1)}
                onTouchStart={() => x(y + 1)}>
                Found it!</button>

            <button className="pixel-button"
                onClick={() => x(y - 1)}
                onTouchStart={() => x(y - 1)}>
                i lied :(</button>
      </Grid>
    </div>
  );
}

export default Counter;
