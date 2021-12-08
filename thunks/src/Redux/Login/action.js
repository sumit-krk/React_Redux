import { LOGIN_LOADING, LOGIN_SUCCESS,  LOGIN_FAILURE } from "./TestTypes.js";

export const loginLoading = () => ({type : LOGIN_LOADING});
export const loginSuccess = (data) => ({type : LOGIN_SUCCESS, payload : data})
export const loginFailure = (data) => ({type : LOGIN_FAILURE, payload : data});
