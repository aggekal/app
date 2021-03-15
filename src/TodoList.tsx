import React , {useState} from 'react';
import { observer } from "mobx-react";
import { TodoStoreImpl } from './TodoStore';


interface TodoListProps {
    todoStore: TodoStoreImpl
}
export const TodoList: React.FC<TodoListProps> = observer( ({ todoStore }) => {

    const [value,setValue] = useState<string>('');
    const status = todoStore.status;
    return <div>
        <input type="text" value={value} onChange={
            (event) => {
                setValue(event.target.value);
            }
        }/>
        <button onClick={ () => {
            if (value) {
                todoStore.addTodo(value)
                setValue('')
            }
        }}>submit</button>
        <br/>
        Completed: {status.completed}
        <br/>
        Remaining: {status.remaining}
        <ul>
            {todoStore.todos.map( todo => {
                return <li key={ todo.id } ><button onClick={ () => {
                    todoStore.toggleTodo(todo.id)
                }}>[{todo.completed ?  'x' : ' '}]{todo.title}</button> <button onClick={
                    () => {
                        todoStore.deleteTodo(todo.id) 
                    }
                }>X</button></li>
            })}
        </ul>
    </div>
})