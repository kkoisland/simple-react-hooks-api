import React, { useState } from 'react';

const App = () => {
  // State
  const [counter, setCounter] = useState(0);
  
  // Action
  const increment = () => {
    setCounter(counter+1);
  }

 // View
 return (
   <div>
     Counter: {counter} <button onClick={increment}>Increment</button>
   </div>
 )
}

export default App;