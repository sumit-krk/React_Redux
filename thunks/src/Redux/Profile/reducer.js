import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_SUCCESS } from "./actionTypes";


const initState = {
    loading: false,
    data : [],
    error : false
}



export const reducerSearch = (state = initState, {type, payload})  => {
    switch(type) {
        case SEARCH_LOADING:
            return {
                ...state,
                loading : true
            }
        case SEARCH_SUCCESS: 
            return {
                ...state,
                loading: false,
                data : payload
            }
        case SEARCH_ERROR: 
            return {
                ...state,
                loading : false,
                error : payload
            }
        default : 
            return {
                ...state
            }
    }
}