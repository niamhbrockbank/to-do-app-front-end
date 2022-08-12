import taskList from '../temptask.json'
import Task from './Task'
import {useEffect} from 'react'

export default function TaskListSection(): JSX.Element {    
    useEffect( () => console.log('hi'), [])
    
    const taskElements = taskList.map((todo) => <li key={todo.id}>{todo.title}</li>)
    return (
        <div>
            <ul>
                <li>Saved to dos go here</li>
                {taskElements}
                <Task />
            </ul>
        </div>
    )
} 