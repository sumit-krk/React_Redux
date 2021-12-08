import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addUserFailure, addUserLoading , addUserSuccess} from './../Redux/Registration/action';
import axios from "axios";
const Registration = () => {

    const payload = {
        name : "",
        email : "",
        username: "",
        password : "",
        mobile : "",
        description : ""
    }
    const dispatch = useDispatch();
    const store = useSelector((store) => store); 
    const {loading, users, error} = store.register;
    // console.log(users, loading, error);

    const [user,setUser] = useState(payload);
    const handleChange = ({name, value}) => {
        
        setUser({...user, [name] : value})
    } 


    if(error !== false) {
         (
            <div>
                {error}
            </div>
        )
    }


    return (
        <div style = {{width: "500px", boxShadow : "0px 0px 2px 4px orange", margin: "auto"}}>
            <input style = {{padding: "20px",marginTop: "10px", width: "400px", margin: "auto", height: "30px", fontSize: "25px", borderRadius: "10px"}} required onChange = {(e) => { handleChange(e.target)}} name = "name" value =  {user.name} type = "text" placeholder = "Enter the name" /><br />
            <input style = {{padding: "20px",marginTop: "10px", width: "400px", margin: "auto", height: "30px", fontSize: "25px", borderRadius: "10px"}} required onChange = {(e) => { handleChange(e.target)}} name = "email" value = {user.email} type = "text" placeholder = "Enter the email" /> <br />
            <input style = {{padding: "20px",marginTop: "10px", width: "400px", margin: "auto", height: "30px", fontSize: "25px", borderRadius: "10px"}} required onChange = {(e) => { handleChange(e.target)}} name = "password" value = {user.password} type = "text" placeholder = "Enter the password" /> <br />
            <input style = {{padding: "20px",marginTop: "10px", width: "400px", margin: "auto", height: "30px", fontSize: "25px", borderRadius: "10px"}} required  onChange = {(e) => { handleChange(e.target)}} name = "username" value = {user.username} type = "text" placeholder = "Enter the userName" /> <br />
            <input style = {{padding: "20px",marginTop: "10px", width: "400px", margin: "auto", height: "30px", fontSize: "25px", borderRadius: "10px"}} required onChange = {(e) => { handleChange(e.target)}} name = "mobile" value = {user.mobile} type = "text" placeholder = "Enter the mobile Number" /> <br />
            <input style = {{padding: "20px",marginTop: "10px", width: "400px", margin: "auto", height: "30px", fontSize: "25px", borderRadius: "10px"}} required onChange = {(e) => { handleChange(e.target)}} name = "description" value = {user.description} type = "text" placeholder = "Enter the description" /> <br />
            <button style = {{padding: "20px", backgroundColor: "orange", color: "white", fontWeight: "bolder", fontSize: "25px"}} onClick = { async () => {
                dispatch(addUserLoading());

                try{
                    if(user.name === ""&&
                    user.email === ""&&
                    user.username=== ""&&
                    user.password === ""&&
                    user.mobile === ""&&
                    user.description === "") {
                        dispatch(addUserFailure("Please fill all the credentials"))
                    } else {

                    
                    const data = await axios.get("http://localhost:3001/users");
                    const users = data.data;
                    const usera = users.filter((e) => {
                        return e.username === user.name && e.password === user.password
                    })
                    
                    if(usera.length === 0) {
                        await axios.post("http://localhost:3001/users", user);

                        dispatch(addUserSuccess(user))
                    } else {
                        console.log("username already exist")
                    }
                }
                    
                } catch(error) {
                    dispatch(addUserFailure(error));
                }
            }}>Register</button>
            {
                error !== false ? (<div>{error}</div>) : ""
            }
        </div>
    )
}

export {Registration};