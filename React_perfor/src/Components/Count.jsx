
import React from "react";

 const Count = () => {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });



    return (
        <>
        
        <h2>Count </h2><h1> : {count}</h1>
        </>
    )

}
export const Counter = React.memo(Count);


