import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchLoading, searchError, searchSuccess } from "../Redux/Profile/action.js";
import {Redirect} from "react-router-dom";


const Profile = () => {

const [name, setName] = useState("")
const [page, setPage] = useState(1);
const dispatch = useDispatch();

const store = useSelector((store) => store);
const {loading, data, error} = store.search;
const {isAuth} = store.login;
// console.log(isAuth, loading, data, error);

if(!isAuth) {
    return <Redirect to = "/login" />
}

    return (
        <div>
            <div>
                <input onChange = {(e) => setName(e.target.value)} type = "text" placeholder = "Enter the name you want to search" /> 
                <button onClick = {async () => {
                    dispatch(searchLoading())
                    try {
                        let item = await axios.get(`https://api.github.com/search/users?q=${name}&page=${page}&per_page=5`)
                        console.log(item.data.items);
                        dispatch(searchSuccess(item.data.items))
                    } catch(error) {
                        dispatch(searchError(error));
                    }
                }}>SEARCH</button>
            </div>
            <div>
                {
                    data.map((e) => (
                        <div key = {e.id}>
                            <img style = {{width: "150px", height: "140px"}} src = {e.avatar_url} alt = "image" />
                            <p>{e.login}</p>
                            <a href = {e.url}>Connect in github</a>
                            <p>Git url : <a href = {e.repos_url}>{e.repos_url}</a></p>
                            <hr />
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick = {async (e) => {setPage(page - 1)
                    dispatch(searchLoading())
                    try {
                        let item = await axios.get(`https://api.github.com/search/users?q=${name}&page=${page}&per_page=5`)
                        console.log(item.data.items);
                        dispatch(searchSuccess(item.data.items))
                    } catch(error) {
                        dispatch(searchError(error));
                    }
                }}>Prev</button>
                <button onClick = {async (e) => {
                    setPage(page + 1)
                    dispatch(searchLoading())
                    try {
                        let item = await axios.get(`https://api.github.com/search/users?q=${name}&page=${page}&per_page=5`)
                        console.log(item.data.items);
                        dispatch(searchSuccess(item.data.items))
                    } catch(error) {
                        dispatch(searchError(error));
                    }
                }}>Next</button>
            </div>
        </div>
    )
}

export {Profile};