import React from 'react';
import Grid from '@mui/material/Grid';

export interface CounterProps {
  initialValue: number;
}

function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = React.useState<number>(initialValue);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="pixel-letters">{count}</h1>
      <Grid container spacing={15} justifyContent="center">
        <button
          className="pixel-button"
          onClick={() => setCount(count + 1)}
          onTouchStart={() => setCount(count + 1)}
        >
          Found it!
        </button>
        <button
          className="pixel-button"
          onClick={() => setCount(count - 1)}
          onTouchStart={() => setCount(count - 1)}
        >
          i lied :(
        </button>
      </Grid>
    </div>
  );
}

export default Counter;
