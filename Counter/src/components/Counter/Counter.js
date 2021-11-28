import { useState } from "react";
import "./Counter.css";

function Counter(){
    let x=0;
    let [count,setCount]=useState(x);
    let incrseCount = () =>{
        setCount(count+1)
    }

    let decrseCount;
    if(count>0)
    {
        decrseCount = () =>{
            setCount(count-1)
        }
    }
    return(
        <div className="mainDiv">
            <div className="heading">Counter Apps</div>
            <div className="button">
                <button onClick={ incrseCount }>+</button>
                <div> {count} </div>
                <button onClick={ decrseCount }>-</button>
            </div>
        </div>
    )
}
export default Counter;