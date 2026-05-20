import { useState } from "react";
import Counter from "./Counter";

function App(){
    const [list, setList]=useState(['A',"B","C"]);

    return(
        <div className="container">
            <h1>Why we should not add index as unique key</h1>
            <p className="para">To see the <strong>issue</strong> increase count value ,then click button <strong>addDataInList</strong> and see how COUNT value is passed to newely added counter</p>
            <button className="container-btn" onClick={()=>{setList(['D',...list])}}>addDataInList</button>

            <div className="counters">
                {list.map((val,index)=><Counter key={index} prop={val}/>)}
            </div>
            <p className="reason">
                <strong>REASON:-</strong> <br />
                -React uses key to identify components between renders. <br />
                -When we use index as key, the key depends on position, not actual data.<br />
                -If items are inserted, deleted, or reordered, indexes change.<br />
                -React then reuses the wrong old component and its state gets shifted to another item accidentally.<br />
            </p>
        </div>
    )
}

export default App;