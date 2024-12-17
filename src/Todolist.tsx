import {Task} from "./Task";
import {Button} from "./Button";
import * as React from "react";
import {TodolistHeader} from "./TodolistHeader";
import {FilterButtons} from "./FilterButtons";
import {FilterValuesType} from "./App";
import {AddForm} from "./AddForm";
import {useRef, useState} from "react";


export type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeTodolistFilter: (nextFilter: FilterValuesType) => void
    addTask: (title:string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean

}

export const Todolist = (props: TodolistPropsType) => {

    // const inputRef = useRef<HTMLInputElement>(null)
    const[taskTitle, setTaskTitle] = useState("")

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
    const isAddTaskPossible = taskTitle.length <= 15
    return (
        <div className="todolist">
            <TodolistHeader title={props.title}/>
            <div>
                <input value ={taskTitle} onChange={
                    (element) => setTaskTitle(element.currentTarget.value)
                }/>
                {/*<input ref={inputRef}/>*/}
                <Button title={"+"}
                        onClickHandler={()=> {props.addTask(taskTitle)
                        setTaskTitle("")
                        }
                }
                //     if (inputRef.current) {
                //         props.addTask(inputRef.current.value)}
                // }}
                    isBtnDisabled={!taskTitle.length || !isAddTaskPossible}
                />

            </div>
            {!isAddTaskPossible && <div> Task title is too long</div>}
            {!taskTitle.length && <div> Enter task title (15 chars)</div>}
            {/*<AddForm/>*/}
            {tasksList}
            <FilterButtons changeTodolistFilter={props.changeTodolistFilter}/>
        </div>
    )
}