import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Resturant = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("");
    const [input, setInput] = useState("")
    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleInput = () => {
        setInput(text);
         axios.get(`${baseURL}/${input}`).then((response) => {
                setData(response.data);
            });
    
    }
    const baseURL=process.env.REACT_APP_API_LINK
  
    return (
         <div>
            <input onChange={handleText}></input>
            <button onClick={() => {
                handleInput()
            }}>Search </button>
            {data.map((el) => {
                return <div>
                    <p>{el.idMeal}</p>
                    <p>{el.strMeal }</p>
                    <p>{el.strCategory }</p>
                    <p>{el.strArea }</p>
                </div>
            })}
            </div>
        );
    
   
}

export default Resturant
