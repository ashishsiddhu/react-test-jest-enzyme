import React, { useState } from 'react';

function Content(props) {
  const [count, setCount] = useState(0);

  return (
      <div>
          <p id="counterValue">{count}</p>
          <button id="increment" onClick={() => setCount(count + 1)}>
              {props.data}
          </button>
      </div>
  );
}


export default Content;