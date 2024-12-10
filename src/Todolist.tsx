import {Task} from "./Task";
import {Button} from "./Button";
import * as React from "react";
import {TodolistHeader} from "./TodolistHeader";
import {FilterButtons} from "./FilterButtons";
import {FilterValuesType} from "./App";
import {AddForm} from "./AddForm";


export type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void
    changeTodolistFilter: (nextFilter: FilterValuesType) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

export const Todolist = (props: TodolistPropsType) => {
    // const mapedTask = tasks.map((el: TaskType, index: number) => {
    //         //debugger
    //         return (
    //             <Task key={el.id} title={el.title} isDone={el.isDone}/>
    //         )
    //     }
    // )
    // return (
    //     <div>
    //         <h3>{title}</h3>
    //         <div>
    //             <input/>
    //             <Button title={'+'}/>
    //         </div>
    //         {tasks.length === 0 ? (
    //             <p> Тасок нет</p>
    //         ) : (
    //             <ul>
    //                 <button onClick={()=>removeTask(task.id)}>x</button>
    //                 {mapedTask}
    //             </ul>
    const tasksList = props.tasks.length === 0
        ? (
            <span>Your todolist is empty</span>
        )

        : (
            <ul>
            {props.tasks.map(t => {
                    return (
                        <li>
                            <Button title="x" onClickHandler={() => props.removeTask(t.id)}/>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })
            }
        </ul>
        )
    return (
        <div className="todolist">
            <TodolistHeader title={props.title}/>
            <AddForm/>
            {tasksList}
            <FilterButtons changeTodolistFilter={props.changeTodolistFilter}/>
        </div>
    )
}