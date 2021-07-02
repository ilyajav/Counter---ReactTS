import style from './setCounter.module.css'
import {ChangeEvent, FC, useEffect} from "react";
import classNames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {changeMaxValueAC, changeMinValueAC} from "../bll/counter-reducer";
import {ButtonForm} from "../ButtonForm/ButtonForm";

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
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

    const dispatch = useDispatch()

    useEffect(() => {
        if (minValue < maxValue && minValue >= 0) {
            setError(false)
            return setText('enter values and press set')
        }

        if (minValue < 0 || minValue === undefined) {
            setError(true)
            return setText('Incorrect value')
        }

        setError(true)
        setText('Incorrect value')
    }, [minValue, maxValue])


    const onSetMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(+e.currentTarget.value))
    }

    const onSetMin = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinValueAC(+e.currentTarget.value))
    }

    const onChangeValues = () => {
        changeValues(minValue, maxValue)
        setOnCounter(true)
    }

    return (
        <div className={style.setCounter}>
            <div className={style.firstSection}>
                <div>
                    <span>max value:</span>
                    <input
                        type='number'
                        className={classNames(style.maxInput, error
                            ? style.errorInput
                            : '')}
                        disabled={onCounter}
                        value={maxValue.toString()}
                        onChange={onSetMax}
                    />
                </div>
                <div>
                    <span>min value:</span>
                    <input
                        type='number'
                        disabled={onCounter}
                        className={classNames(style.minInput, error
                            ? style.errorInput
                            : '')}
                        value={minValue.toString()}
                        onChange={onSetMin}/>
                </div>
            </div>
            <div className={style.twiceSection}>
                <ButtonForm buttonText={'Set'} onChangeValues={onChangeValues}
                            disabled={onCounter || error}/>
            </div>
        </div>
    )
}
