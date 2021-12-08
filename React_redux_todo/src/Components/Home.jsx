import styled from "styled-components";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodoLoading, addTodoSuccess, addTodoError, getTodoLoading, getTodoSuccess, getTodoError} from "../redux/action.js";
import axios from "axios";
import {Link} from "react-router-dom";

export const Home = () => {


    const Wrapper = styled.div`
        width: 700px;
        height: 400px;
        margin: auto;
        border : 1px solid black;
        ${'' /* box-shadow : 0px 0px 3px 0.5px black; */}
        display : grid;
        grid-template-rows : 20% 75%;
        grid-gap: 2%;
    `
    const Input_Container  = styled.div`
        width: 100%;
        ${'' /* border : 1px solid black; */}
    `
    const Input = styled.input`
        width: 400px;
        height: 50px;
        ${'' /* border : 0px solid black; */}
        font-size: 30px;
        ${'' /* border-bottom : 1px solid black; */}
    `
    const Button = styled.button`
        width: 200px;
        height: 40px;
        background-color: blue;
        color : white;
        font-weight: bold;
        font-size: 20px;
        ${'' /* border : 0px solid black; */}
        cursor : pointer;
        border-radius: 5px;
        

    `
    const Todo_container = styled.div`
        width: 100%;
        ${'' /* border : 2px solid green; */}
    `
    const Todo_one = styled.div`
        width: 94%;
        height: 50px;
        font-size: 30px;
        font-weight: bold;
        background-color: lightblue;
        border-radius: 5px;
        ${'' /* border: 0px solid black; */}
        color: darkgreen;
        display: flex;
        flex-wrap: wrap;
    `
    
    const dispatch = useDispatch();
    const {loading, data, error} = useSelector((store) => store.todos);
    // console.log(store.getState())
    const [text, setText] = useState("");
    const [completed, setCompleted] = useState(() => {
        let count = 0;
        data.map((e) => {
            if(e.status == true) {
                count++;
            }
        })
        return count;
    })
    const [unc, setunc] = useState(() => {
        let count = 0;
        data.map((e) => {
            if(e.status == false) {
                count++;
            }
        })
        return count;
    })
    // const [dataa, setData] = useState([...data, data])

    const getData = async () => {
        dispatch(getTodoLoading());

        try {
            const {data} = await axios.get("http://localhost:3001/todos");

            dispatch(getTodoSuccess(data));
        } catch(error) {
            dispatch(getTodoError(error))
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const handleDelete = async (e) => {
        await axios.delete(`http://localhost:3001/todos/${e}`, {
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([e])
        })


        getData();
    }



    const handleUpdate = async (e) => {
        const res = await axios.get(`http://localhost:3001/todos/${e}`);

        const payload = {
            status : !res.data.status,
            title : res.data.title
        }
         await axios.patch(`http://localhost:3001/todos/${e}`, payload);
        getData();
        console.log(res.data.status);
    }


    return (
        <Wrapper>
            <Input_Container>
        
           
                <Input type = "text" value = {text}  onChange = {(e) => setText(e.target.value)}   placeholder = "Type here.." />
                    <Button onClick = { async () => {
                    dispatch(addTodoLoading());

                    const payload = {
                        status : false,
                        title : text
                    }

                    try {
                        const {data} = await axios.post("http://localhost:3001/todos", payload)
                        dispatch(addTodoSuccess(data))
                    } catch {
                        dispatch(addTodoError(error))
                    }

                }}>ADD</Button>
            </Input_Container>
            <Todo_container>
                {
                    data.map((e) => (
                        <Todo_one key = {e.id}>
                            {
                                e.status ? (<div style = {{width: "50%", color: "red"}}>
                                    {e.title} <span>----Completed</span>
                                </div>) : (
                                    <div style = {{width: "50%"}}>
                                        {e.title}
                                    </div>
                                )
                            }
                            
                            <div>
                                
                                        <button onClick = {() => {
                                            handleUpdate(e.id);
                                        }} style = {{marginLeft: "10px"}}>Status</button>
                                 
                            
                            <Link to = {`/todo/${e.id}`}><button style = {{marginLeft: "10px"}}>Edit</button></Link>
                            <button onClick = {() => { 
                                handleDelete(e.id)
                            }} style = {{marginLeft: "10px"}}>Delete</button>
                            </div>
                        </Todo_one>
                    ))
                }
            </Todo_container>
            <div>
                Total completed :- {
                    completed
                }
            </div>
            <div>
                Total Uncompleted :- {unc}
            </div>
        </Wrapper>
    )
}