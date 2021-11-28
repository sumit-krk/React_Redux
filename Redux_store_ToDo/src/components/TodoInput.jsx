import { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from 'uuid'
import { addTodo } from "../redux/todos/action"


const TodoInput = () =>{
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const handleAdd =()=>{
        const payload = {
            title,
            status: false,
            id: uuid()
        }
        const addTodoAction = addTodo(payload)
        dispatch(addTodoAction)
    }

    return (
        <div>
            <h2>Todo</h2>
            <input type="text"  placeholder="enter todo" value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}

export {TodoInput}