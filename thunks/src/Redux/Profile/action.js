
import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_SUCCESS } from './actionTypes';


export const searchLoading = () => ({type : SEARCH_LOADING})
export const searchSuccess = (data) => ({type : SEARCH_SUCCESS, payload: data});
export const searchError = (data) => ({type : SEARCH_ERROR, payload: data});