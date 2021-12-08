
import { useState } from 'react';
import axios from "axios";
import {uuid} from "uuidv4"
import { useDispatch, useSelector } from 'react-redux';
import { loginLoading, loginSuccess, loginFailure } from './../Redux/Login/action.js';
import {Redirect} from "react-router-dom";

const Login = () => {



    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const store = useSelector((store) => store);
    const {loading, isAuth, token, error} = store.login;

    if(loading) {
        return (
            <div>....Loading.. please wait</div>
        )
    }
    if(isAuth) {
        return (
            <Redirect to = "/profile" />
        )
    }

    return (
        <div>
            <input onChange = {(e) => setUsername(e.target.value)} type = "text" placeholder = "Enter the username" /><br />
            <input onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "Enter the password" /><br />
            <button onClick = {async () => {
                dispatch(loginLoading());
                try {
                    const payload = {
                        username,
                        password
                    }
                    const data = await axios.get("http://localhost:3001/users");
                    const users = data.data;
                    const user = users.filter((e) => {
                        return e.username === username && e.password === password
                    })
                    
                    if(user.length !== 0) {
                        let token = uuid();
                        dispatch(loginSuccess(token))

                    }


                } catch(error) {
                    dispatch(loginFailure(error))
                }
            }}>LOGIN</button>
        </div>
    )
}

export {Login};