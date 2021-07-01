import style from './setCounter.module.css'
import {ChangeEvent, FC} from "react";
import classNames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {changeMaxValueStringAC, changeMinValueStringAC} from "../bll/setCounter-reducer";

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

    const minValue = useSelector<AppStateType, string>(state => state.setCounter.minValueString)
    const maxValue = useSelector<AppStateType, string>(state => state.setCounter.maxValueString)

    const dispatch = useDispatch()

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
        dispatch(changeMaxValueStringAC(e.currentTarget.value))
    }

    const onSetMin = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinValueStringAC(e.currentTarget.value))
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