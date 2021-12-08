import { LOGIN_FAILURE, LOGIN_LOADING , LOGIN_SUCCESS} from "./TestTypes.js";




function loadData(key) {
    try{
        let data = localStorage.getItem(key) 
        data = JSON.parse(data);
        return data;
    } catch(error) {
        return undefined;
    }
}

const initState = loadData("token") || {
    loading: false,
    isAuth : false,
    token : "",
    error : false,
}


function saveData(key, data="") {
    localStorage.setItem(key, JSON.stringify(data))
}


export const reducerLogin = (state = initState, {type, payload})   => {
    switch(type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading : true,
            }
        case LOGIN_SUCCESS: 
        saveData("token", payload)
            return {
                ...state,
                loading : false,
                isAuth : true,
                token : payload,

            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading : false,
                isAuth: false,
                token : "",
                error : true,
            }

        default : 
            return {
                ...state
            }
    }
}