import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {
    const [value, setValue] = useState<number>(0)

    const increaseValue = () =>{
        setValue(value+1)
    }

    const resetCounter = () =>{
        setValue(0)
    }

  return (
    <div className="App">
     <Counter
         value={value}
         increaseValue={increaseValue}
         resetCounter={resetCounter}
     />
     </div>
  );
}

export default App;
