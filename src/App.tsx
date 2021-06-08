import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./setCounter/SetCounter";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [stopValue, setStopValue] = useState<number>(0)
    const [onCounter, setOnCounter] = useState(false)
    const [text, setText] = useState<string>('enter values and press set')


    const increaseValue = () => {
        setStartValue(startValue + 1)
    }

    const resetCounter = () => {
        setStartValue(0)
        setOnCounter(false)
    }

    const changeValue = (min: number, max: number) =>{
        setStartValue(min)
        setStopValue(max)
    }

    return (
        <div className="App">
            <SetCounter
                changeValue={changeValue}
                setOnCounter={setOnCounter}
                onCounter={onCounter}
                setText={setText}
                text={text}
            />
            <Counter
                startValue={startValue}
                increaseValue={increaseValue}
                resetCounter={resetCounter}
                stopValue={stopValue}
                onCounter={onCounter}
                text={text}
            />
        </div>
    );
}

export default App;
