import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./setCounter/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {changeMaxValueAC, changeMinValueAC, increaseMinValueAC} from "./bll/counter-reducer";


function App() {
    const minValue = useSelector<AppStateType, number>((state => state.counter.minValue))
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const dispatch = useDispatch()
    const [onCounter, setOnCounter] = useState(false)
    const [text, setText] = useState<string>('enter values and press set')
    const [error, setError] = useState<boolean>(false)

    const increaseValue = () => {
        dispatch(increaseMinValueAC())
    }

    const resetCounter = () => {
        setOnCounter(false)
    }

    const changeValues = (min: number, max: number) =>{
        dispatch(changeMinValueAC(min))
        dispatch(changeMaxValueAC(max))
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
