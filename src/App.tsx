import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./setCounter/SetCounter";


function App() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [onCounter, setOnCounter] = useState(false)
    const [text, setText] = useState<string>('enter values and press set')
    const [error, setError] = useState<boolean>(false)

    const increaseValue = () => {
        setMinValue(minValue + 1)
    }

    const resetCounter = () => {
        setOnCounter(false)
    }

    const changeValues = (min: number, max: number) =>{
        setMinValue(min)
        setMaxValue(max)
        localStorage.setItem('minValue', JSON.stringify(min))
        localStorage.setItem('maxValue', JSON.stringify(max))
    }

    return (
        <div className="App">
            <SetCounter
                changeValues={changeValues}
                setOnCounter={setOnCounter}
                onCounter={onCounter}
                setText={setText}
                setError={setError}
                error={error}
            />
            <Counter
                minValue={minValue}
                increaseValue={increaseValue}
                resetCounter={resetCounter}
                maxValue={maxValue}
                onCounter={onCounter}
                text={text}
            />
        </div>
    );
}

export default App;
