import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./setCounter/SetCounter";


function App() {
    const [value, setValue] = useState<number>(0)
    const [stopValue, setStopValue] = useState<number>(0)

    const increaseValue = () => {
        setValue(value + 1)
    }

    const resetCounter = () => {
        setValue(0)
    }

    const changeValue = (min: number, max: number) =>{
        setValue(min)
        setStopValue(max)
    }

    return (
        <div className="App">
            <SetCounter changeValue={changeValue}/>
            <Counter
                value={value}
                increaseValue={increaseValue}
                resetCounter={resetCounter}
                stopValue={stopValue}
            />
        </div>
    );
}

export default App;
