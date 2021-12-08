import { ADD_USER_FAILURE, ADD_USER_LOADING, ADD_USER_SUCCESS } from "./actionTypes";

const initState = {
    loading : false,
    users : [],
    error : false,
}

export const reducerRegister = (state = initState, {type, payload}) => {
    switch(type) {
        case ADD_USER_LOADING : 
            return {
                ...state,
                loading : true

            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading : false,
                users : [...state.users, payload]
            }
        case ADD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error : payload
            }
        default :
            return {
                ...state
            }

    }
}