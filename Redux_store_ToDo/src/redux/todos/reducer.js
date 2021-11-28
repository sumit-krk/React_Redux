import { loadData, saveData } from "../../utils/localStorage";
import { ADD_TODO } from "./actionTypes";



const initState = {
    todos: loadData("todos") || []
}


export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            const updatedTodo = [...state.todos, payload]
            saveData("todos", updatedTodo)
            return {
                ...state,
                todos: updatedTodo
            }
        default:
            return {
                ...state
            }
    }
}   