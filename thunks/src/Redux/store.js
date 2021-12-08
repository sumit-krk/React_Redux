import {createStore, combineReducers} from "redux";
import {reducerRegister} from "./Registration/reducer.js";
import {reducerLogin} from "./Login/reducer.js";
import {reducerSearch} from "./Profile/reducer.js";

const rootReducer = combineReducers({register: reducerRegister, login: reducerLogin, search: reducerSearch});

export const store = createStore(rootReducer)


