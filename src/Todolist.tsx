import {Task} from "./Task";


export type TodolistPropsType = {
    title : string
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
                <Task key={el.id} title ={el.title} isDone={el.isDone}/>
            )}
        )



//const taskList: Array<JSX.Element> = tasks.map(t => {
//        <li>
//            <input type="checkbox" checked={t.isDone}/>
//            <span>{}</span></li>
//    })
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {mapedTask}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                <button>title={'Completed'}</button>
            </div>
        </div>
    )
}