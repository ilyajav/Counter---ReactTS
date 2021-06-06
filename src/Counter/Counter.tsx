import {FC} from "react";
import style from './Counter.module.css'


type CounterType = {
    value: number;
    stopValue: number;
    increaseValue: () => void;
    resetCounter: () => void;
}

export const Counter: FC<CounterType> = ({value, increaseValue, resetCounter, stopValue}) => {

    return (
        <div className={style.counter}>
            <div className={style.firstSection}>
                <span className={value === stopValue ? style.valueMax : ''}>{value}
                </span>
            </div>
            <div className={style.twiceSection}>
                <div className={style.incButton}>
                    <button onClick={increaseValue} disabled={value === stopValue}>inc</button>
                </div>
                <div className={style.resetButton}>
                    <button onClick={resetCounter} disabled={value < stopValue}>reset</button>
                </div>
            </div>
        </div>
    )
}