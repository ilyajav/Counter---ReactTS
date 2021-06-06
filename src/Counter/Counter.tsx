import {FC} from "react";
import style from './Counter.module.css'


type CounterType = {
    value: number
    increaseValue: () => void;
    resetCounter: () => void;
}

export const Counter: FC<CounterType> = ({value, increaseValue, resetCounter}) =>{

    return(
        <div className={style.counter}>
            <div className={style.firstSection}>
                <span className={ value === 5 ? 'valueMax' : ''}>{value}</span>
            </div>
            <div className={style.twiceSection}>
            <div className={style.incButton}>
                <button onClick={increaseValue} disabled={value === 5}>inc</button>
            </div>
            <div className={style.resetButton}>
                <button onClick={resetCounter} disabled={value < 5}>reset</button>
            </div>
            </div>
        </div>
    )
}