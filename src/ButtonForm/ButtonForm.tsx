import {FC} from "react";

type ButtonFormPropsType = {
    buttonText: string
    onChangeValues: () => void;
    disabled: boolean
}

export const ButtonForm: FC<ButtonFormPropsType> = ({buttonText, onChangeValues, disabled}) => {
    return (
        <button disabled={disabled} onClick={onChangeValues}>{buttonText}</button>
    )
}