import { useState } from "react";
import Counter from "./Counter";

function App(){
    const [list, setList]=useState(['A',"B","C"]);

    return(
        <div className="container">
            <h1>Why we should not add index as unique key</h1>
            <p>To see the <strong>issue</strong> increase count value ,then click button <strong>addDataInList</strong> and see how COUNT value is passed to newely added counter</p>
            <button className="container-btn" onClick={()=>{setList(['D',...list])}}>addDataInList</button>

            <div className="counters">
                {list.map((val,index)=><Counter key={index} prop={val}/>)}
            </div>
            
        </div>
    )
}

export default App;