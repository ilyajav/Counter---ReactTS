import {FC} from "react";
import style from './Counter.module.css'
import {ButtonForm} from "../ButtonForm/ButtonForm";

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
    const condition1 = (
        text === 'Incorrect value' || minValue === maxValue
    ) && onCounter ? style.valueMax : ''
    const condition2 = (minValue === maxValue) ||
        (text === 'Incorrect value') ||
        !onCounter

    return (
        <div className={style.counter}>
            <div className={style.firstSection}>
                <span className={condition1}>
                    {!onCounter ? text : minValue}
                </span>
            </div>
            <div className={style.twiceSection}>
                <div className={style.incButton}>
                    <ButtonForm
                        buttonText={'inc'}
                        onChangeValues={increaseValue}
                        disabled={condition2}
                    />
                </div>
                <div className={style.resetButton}>
                    <ButtonForm
                        buttonText={'reset'}
                        onChangeValues={resetCounter}
                        disabled={!onCounter}
                    />
                </div>
            </div>
        </div>
    )
}
