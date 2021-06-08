import {FC} from "react";
import style from './Counter.module.css'


type CounterType = {
    startValue: number;
    stopValue: number;
    increaseValue: () => void;
    resetCounter: () => void;
    onCounter: boolean;
    text: string
}

export const Counter: FC<CounterType> = ({
                                             startValue,
                                             increaseValue,
                                             resetCounter,
                                             stopValue,
                                             onCounter,
                                             text
                                         }) => {

    return (
        <div className={style.counter}>
            <div className={style.firstSection}>
                <span
                    className={text === 'Incorrect value' ? style.valueMax : ''}>{!onCounter ?
                    text
                    : startValue
                }</span>
            </div>
            <div className={style.twiceSection}>
                <div className={style.incButton}>
                    <button onClick={increaseValue}
                            disabled={startValue === stopValue || text === 'Incorrect value'}>inc
                    </button>
                </div>
                <div className={style.resetButton}>
                    <button onClick={resetCounter} disabled={startValue < stopValue || !onCounter}>reset</button>
                </div>
            </div>
        </div>
    )
}