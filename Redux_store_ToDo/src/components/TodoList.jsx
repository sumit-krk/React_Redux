import { useSelector } from "react-redux"



const TodoList =()=>{
    const todos = useSelector(state=>state.app.todos)

    return (
        <div>
            {todos.map((e)=>(
                <div key={e.id}>{e.title}</div>
            ))}
        </div>
    )
}

export {TodoList}