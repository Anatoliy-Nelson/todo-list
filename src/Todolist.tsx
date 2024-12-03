import {Task} from "./Task";
import {Button} from "./Button";


export type TodolistPropsType = {
    title: string
    tasks: TaskType[]
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({title, tasks}: TodolistPropsType) => {
    const mapedTask = tasks.map((el: TaskType, index: number) => {
            //debugger
            return (
                <Task key={el.id} title={el.title} isDone={el.isDone}/>
            )
        }
    )
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {tasks.length === 0 ? (
                <p> Тасок нет</p>
            ) : (
                <ul>
                    {mapedTask}
                </ul>
            )}
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    )
}