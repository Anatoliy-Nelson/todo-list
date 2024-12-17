// @flow
import * as React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
    isBtnDisabled?: boolean
}
export const Button = ({title, onClickHandler, isBtnDisabled}: ButtonPropsType) => {
    return (
        <button
            disabled={isBtnDisabled}
            onClick={onClickHandler}>{title}</button>
    )
}