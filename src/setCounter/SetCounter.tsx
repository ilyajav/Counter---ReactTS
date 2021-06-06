import style from './setCounter.module.css'
import {ChangeEvent, FC, useState} from "react";

type SetCounterType = {
    changeValue: (min: number, max: number) => void;
}

export const SetCounter: FC<SetCounterType> = ({changeValue}) => {

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const onSetMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const onSetMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }
    const onChangeValue = () =>{
        changeValue(minValue, maxValue)
    }

    return (
        <div className={style.setCounter}>
            <div className={style.firstSection}>
                <div>
                <span>max value:</span><input type='number'
                                              className={style.maxInput} value={maxValue}
                                              onChange={onSetMax}/>
                </div>
                <div>
                <span>min value:</span><input type='number'
                                              className={style.minInput}
                                              value={minValue}
                                              onChange={onSetMin}/>
                </div>
            </div>
            <div className={style.twiceSection}>
               <button onClick={onChangeValue}>Set</button>
            </div>
        </div>
    )
}