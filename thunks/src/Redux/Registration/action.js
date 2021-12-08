import { ADD_USER_FAILURE, ADD_USER_LOADING, ADD_USER_SUCCESS } from "./actionTypes"


export const addUserLoading = () => ({type : ADD_USER_LOADING});
export const addUserSuccess = (data) => ({type : ADD_USER_SUCCESS, payload : data});
export const addUserFailure = (data) => ({type : ADD_USER_FAILURE, payload : data});
