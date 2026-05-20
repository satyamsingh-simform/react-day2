import { useState } from "react";

export default function Counter(props){
    console.log(props);
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