import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [showError, setShowError] = useState(false)

  const counter = (todo) => {
    if( todo === "increment" ){
      if( count + 1 > 0 ){
        setShowError(false)

        setCount( count + 1 )

      }else{
        setCount( count + 1 )

      }
    }else{
      if( count - 1 < 0 ) {
        setShowError(true)
        
        setCount( 0 )
      }else{
        setCount( count - 1 )
        
      }
    }
  }

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">
          {count}
        </span>
      </h1>
      <button 
        data-test="increment-button"
        onClick={()=>counter("increment")}
      >
        Increment Counter
      </button>
      &nbsp;
      <button
        data-test="decrement-button"
        onClick={()=>counter("decrement")}
      >
        Decrement Counter
      </button>
      {
        showError?
          <div 
            data-test="show-error"
          >
            No Count Below Zero 
          </div>
        :
          null
      }
    </div>
  );
}

export default App;
