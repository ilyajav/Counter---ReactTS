import style from './setCounter.module.css'
import {ChangeEvent, FC, useEffect, useState} from "react";
import classNames from 'classnames'

type SetCounterType = {
    changeValues: (min: number, max: number) => void;
    setOnCounter: (value: boolean) => void;
    onCounter: boolean;
    setText: (value: string) => void;
    setError: (value: boolean) => void;
    error: boolean;
}

export const SetCounter: FC<SetCounterType> = ({
                                                   changeValues,
                                                   setOnCounter,
                                                   onCounter,
                                                   setText,
                                                   setError,
                                                   error
                                               }) => {

    const [minValue, setMinValue] = useState<string>('0')
    const [maxValue, setMaxValue] = useState<string>('1')

    useEffect(() => {
        const oldMinValue = localStorage.getItem('minValue')
        const oldMaxValue = localStorage.getItem('maxValue')
        if (oldMaxValue && oldMinValue) {
            setMaxValue(oldMaxValue)
            setMinValue(oldMinValue)
        }
    }, [])

    if (minValue && maxValue) {
        if (+minValue < +maxValue && +minValue >= 0) {
            setError(false)
            setText('enter values and press set')
        } else {
            setError(true)
            setText('Incorrect value')
        }
    }
    else if(minValue === '' || minValue !== ''){
        setError(true)
        setText('Incorrect value')
    }

    const onSetMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    const onSetMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
    }

    const onChangeValues = () => {
        if (minValue && maxValue) {
            if (+minValue < +maxValue) {
                changeValues(+minValue, +maxValue)
                setOnCounter(true)
            }
        }
    }

    return (
        <div className={style.setCounter}>
            <div className={style.firstSection}>
                <div>
                    <span>max value:</span>
                    <input
                    type='number'
                    className={classNames(style.maxInput, error ? style.errorInput : '')}
                    disabled={onCounter}
                    value={maxValue}
                    onChange={onSetMax}/>
                </div>
                <div>
                    <span>min value:</span>
                    <input
                        type='number'
                        disabled={onCounter}
                        className={classNames(style.minInput, error ? style.errorInput : '')}
                        value={minValue}
                        onChange={onSetMin}/>
                </div>
            </div>
            <div className={style.twiceSection}>
                <button disabled={onCounter || error} onClick={onChangeValues}>Set</button>
            </div>
        </div>
    )
}