import { useState } from "react"

const Toggle =()=>{
    const [toggle,updateToggle]=useState(1)
    const showContent =()=>{
        if(toggle){
            return <h1>I am toggle example</h1>
        }else{
            <h></h>
        }
    }
    return(
        <div>
            <div>
                <label>Show content</label>
                &nbsp;<input type="radio" name="show" 
                checked={toggle} 
                onChange={()=>{
                    updateToggle(1)
                }} value="1"/>Show
                &nbsp;<input type="radio" name="hide" 
                checked={!toggle} 
                onChange={()=>{
                updateToggle(0)
                }} value="0"/>Hide
            </div>
            <div>
                {showContent()}
            </div>
        </div>
    )
}
export default Toggle;