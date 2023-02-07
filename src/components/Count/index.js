import { useState } from "react";

const Count =()=>{
    const[count,updateCount]=useState(0) 
    const showCount =()=>{
        return(<h4>{count}</h4>)
    }
    return(
        <div>
            <div>
            <button className="btn btn-primary"  onClick={()=>updateCount(count +1)}>count^</button>
            </div>
            <div>
                {showCount()}
            </div>
        </div>
    )
}
export default Count;