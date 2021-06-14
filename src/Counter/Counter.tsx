import {FC} from "react";
import style from './Counter.module.css'


type CounterType = {
    minValue: number;
    maxValue: number;
    increaseValue: () => void;
    resetCounter: () => void;
    onCounter: boolean;
    text: string
}

export const Counter: FC<CounterType> = ({
                                             minValue,
                                             increaseValue,
                                             resetCounter,
                                             maxValue,
                                             onCounter,
                                             text
                                         }) => {

    return (
        <div className={style.counter}>
            <div className={style.firstSection}>
                <span
                    className={text === 'Incorrect value' || minValue === maxValue && onCounter ? style.valueMax : ''}>{!onCounter ?
                    text
                    : minValue
                }</span>
            </div>
            <div className={style.twiceSection}>
                <div className={style.incButton}>
                    <button onClick={increaseValue}
                            disabled={minValue === maxValue || text === 'Incorrect value'}>inc
                    </button>
                </div>
                <div className={style.resetButton}>
                    <button onClick={resetCounter} disabled={!onCounter}>reset</button>
                </div>
            </div>
        </div>
    )
}