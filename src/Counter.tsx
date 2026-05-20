import { useState } from "react";

type DATA={
    prop:string,
}

export default function Counter(props:DATA){
    console.log('props:',props);
    const [count,setCount]=useState(0);

    return(
        <div className="counter">
            <h2>Our Counter : {props.prop}</h2>
            <div className="count">COUNT:{count}</div>
            <button onClick={()=>{setCount(count+1)}}>Increase</button>
            <button onClick={()=>{setCount(count-1)}}>Decrease</button>
        </div>
    )
}