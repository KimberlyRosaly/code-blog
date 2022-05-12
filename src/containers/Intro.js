import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
      <br></br>
      <Button>I NEED TO BE CLICKED, RIGHT NOW!!!</Button>
    </div>
  );
}

export default Example