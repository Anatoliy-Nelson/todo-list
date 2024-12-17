import React, {Fragment, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import { v1 } from 'uuid';


export type FilterValuesType = "all" | "active" | "completed"

// React.state = [  #123
//     { id: 1, title: "HTML&CSS", isDone: true },
//     { id: 2, title: "JS/TS", isDone: true },
//     { id: 3, title: "REACT", isDone: false },
// ])

// setNextTasks(nextState) #124

// React.state === nextState => false

// root.render(
//  <App />
//);
// React.state = nextState

function App() {
    //BLL
    const todolistTitle ="What to learn"
    // const todolistTitle_2 ="2"
    // const todolistTitle_3 ="3"

    const [tasks, setTasks] = useState<Array<TaskType>>  ([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false}
    ])



    const removeTask = (taskId: string) => { //2
        const nextState: Array<TaskType> = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
        // console.log(tasks);

//     const task_2= [
//         {id: 4, title: "Hello World&CSS", isDone: true},
//         {id: 5, title: "I am Happy", isDone: true},
//         {id: 6, title: "Yo", isDone: true},
// ]
//     const task_3= [
//         {id: 7, title: "HTML&CSS", isDone: true},
//         {id: 8, title: "JS", isDone: true},
//         {id: 9, title: "React", isDone: true},
//     ]
//     const removeTask =(taskId: number) => {
//        tasks = tasks.filter(t => t.id !== taskId)
    }

    const addTask= (title: string) => {
        const newTask: TaskType = {
            isDone: false,
            title: title,
            id: v1(),
        }
        const mewTask = [newTask, ...tasks]
        setTasks(mewTask)

    const nextState: Array<TaskType> = [newTask, ...tasks]
        setTasks(nextState)
    }

    //UI
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

    const changeTodolistFilter = (nextFilter: FilterValuesType) => {
        setFilter(nextFilter)
    }

    let filteredTasks: Array<TaskType> = tasks
    if( filter ==='active'){
        filteredTasks = tasks.filter(t=> !t.isDone)
    }
    if( filter ==='completed') {
        filteredTasks = tasks.filter(t => t.isDone)
    }


    return (
        <div className="App">
            {/*<div className="todolist">*/}
                <Todolist
                    title={todolistTitle}
                    tasks={filteredTasks}
                    removeTask={removeTask}
                    changeTodolistFilter={changeTodolistFilter}
                    addTask={addTask}
                />
            {/*</div>*/}
            {/*<div className="todolist">*/}
            {/*    <Todolist title={todolistTitle_2} tasks={task_2}/>*/}
            {/*</div>*/}
            {/*<div className="todolist">*/}
            {/*    <Todolist title={todolistTitle_3} tasks={task_3}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default App;
