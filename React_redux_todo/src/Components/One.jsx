import {useParams, Link} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {useState, useEffect} from "react";


const One = () => {

    const Wrapper = styled.div`
    width: 700px;
    height: 400px;
    margin: auto;
    ${'' /* border : 1px solid green; */}
    box-shadow : 0px 0px 3px 0.5px black;
    display : grid;
    grid-template-rows : 20% 75%;
    grid-gap: 2%;
    `


    const {id} = useParams();
    const [text, setText] = useState("");
    useEffect( async () => {
        // getData();
        const res = await axios.get(`http://localhost:3001/todos/${id}`);
        // const d = await res.json();
        setText(res.data.title);
    }, [])
    
    
    const handleClick = async () => {
        const payload = {
            status : false,
            title : text
        }
        const res = await axios.patch(`http://localhost:3001/todos/${id}`, payload);
        setText(res.data.title);
    }

    return (


        <div>
        <div>
             <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)} />
            <button onClick = {handleClick}>Update</button>
        </div>
            <Link to = "/">Go to  homepage</Link>
        </div>
    )
}

export {One};