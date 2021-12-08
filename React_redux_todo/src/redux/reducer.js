
import { ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_ERROR, GET_TODO_SUCCESS, GET_TODO_LOADING} from "./actionTypes.js";

const initState = {
    count : 0,
    todos : {
        loading : false,
        data : [],
        error : false
    }
}
export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
      
        case ADD_TODO_LOADING :
            return {
                ...state,
                todos : {
                    ...state.todos, 
                    loading : true
                }
            }

        case ADD_TODO_SUCCESS: 
            return {
                ...state,
                todos : {
                    loading : false,
                    data : [...state.todos.data, payload]

                }
            }
        case ADD_TODO_ERROR : 
            return {
                ...state,
                todos : {
                    ...state.todos, 
                    loading : false,
                    error : payload
                }
            }
            case GET_TODO_LOADING :
                return {
                    ...state,
                    todos : {
                        ...state.todos, 
                        loading : true
                    }
                }
    
            case GET_TODO_SUCCESS: 
                return {
                    ...state,
                    todos : {
                        loading : false,
                        data : payload
    
                    }
                }
            case ADD_TODO_ERROR : 
                return {
                    ...state,
                    todos : {
                        ...state.todos, 
                        loading : false,
                        error : payload
                    }
                }
        default : 
            return state
    }
}