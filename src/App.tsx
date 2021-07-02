import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./setCounter/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {changeMaxValueAC, changeMinValueAC, increaseCounterValueAC} from "./bll/counter-reducer";


export function App() {
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const counterValue = useSelector<AppStateType, number>(state => state.counter.counter)
    const dispatch = useDispatch()
    const [onCounter, setOnCounter] = useState(false)
    const [text, setText] = useState<string>('enter values and press set')
    const [error, setError] = useState<boolean>(false)

    const increaseValue = () => {
        dispatch(increaseCounterValueAC())
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
                minValue={counterValue}
                increaseValue={increaseValue}
                resetCounter={resetCounter}
                maxValue={maxValue}
                onCounter={onCounter}
                text={text}
            />
        </div>
    );
}

