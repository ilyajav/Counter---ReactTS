import style from './setCounter.module.css'
import {ChangeEvent, FC, useState} from "react";
import classNames from 'classnames'

type SetCounterType = {
    changeValue: (min: number, max: number) => void;
    setOnCounter: (value: boolean) => void;
    onCounter: boolean;
    setText: (value: string) => void;
    text: string;
}

export const SetCounter: FC<SetCounterType> = ({changeValue, setOnCounter, onCounter, setText, text}) => {

    const [minValue, setMinValue] = useState<string>()
    const [maxValue, setMaxValue] = useState<string>()
    const [error, setError] = useState<boolean>(false)

    const onSetMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
        setError(false)
    }
    const onSetMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
        setError(false)
    }
    const onChangeValue = () => {
        if (minValue && maxValue) {
            if (+minValue < +maxValue) {
                changeValue(+minValue, +maxValue)
                setOnCounter(true)
                if (text === 'Incorrect value') {
                    setText('enter values and press set')
                }
            } else {
                setText('Incorrect value')
                setError(true)
            }
        }
    }


    return (
        <div className={style.setCounter}>
            <div className={style.firstSection}>
                <div>
                    <span>max value:</span><input
                    type='number'
                    className={classNames(style.maxInput, error ? style.errorInput : '')}
                    value={maxValue}
                    onChange={onSetMax}/>
                </div>
                <div>
                    <span>min value:</span><input
                    type='number'
                    className={classNames(style.minInput, error ? style.errorInput : '')}
                    value={minValue}
                    onChange={onSetMin}/>
                </div>
            </div>
            <div className={style.twiceSection}>
                <button disabled={onCounter} onClick={onChangeValue}>Set</button>
            </div>
        </div>
    )
}