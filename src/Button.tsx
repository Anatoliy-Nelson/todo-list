// @flow
import * as React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export const Button = ({title, onClickHandler}: ButtonPropsType) => {
    return (
        <button onClick={onClickHandler}>{title}</button>
    )
}