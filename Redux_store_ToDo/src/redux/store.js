import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { reducer } from "./todos/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    app: reducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()
    )