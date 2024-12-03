import React, {Fragment} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
//import {TodolistPropsType} from "./Todolist";


function App() {
    //BLL
    const todolistTitle_1 ="1"
    const todolistTitle_2 ="2"
    const todolistTitle_3 ="3"

    const task_1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true}
    ]
    const task_2= [
        {id: 4, title: "Hello World&CSS", isDone: true},
        {id: 5, title: "I am Happy", isDone: true},
        {id: 6, title: "Yo", isDone: true},
]
    const task_3= [
        {id: 7, title: "HTML&CSS", isDone: true},
        {id: 8, title: "JS", isDone: true},
        {id: 9, title: "React", isDone: true},
    ]

    //UI
    return (
        <div className="App">
            <div className="todolist">
                <Todolist title={todolistTitle_1} tasks={task_1}/>
            </div>
            <div className="todolist">
                <Todolist title={todolistTitle_2} tasks={task_2}/>
            </div>
            <div className="todolist">
                <Todolist title={todolistTitle_3} tasks={task_3}/>
            </div>
        </div>
    )
}

export default App;
