// @flow
import * as React from 'react';
import {Button} from "./Button";

type Props = {
    title: string
    isDone: boolean
    // removeTask: () => void
};
export const Task = ({title, isDone}: Props) => {
    return (
        <li>

            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};