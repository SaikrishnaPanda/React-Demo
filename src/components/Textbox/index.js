import{useState} from "react"

const Textbox = ()=>{
    const userObj={
        username:""
    };
    const [user,updateDetails] = useState(userObj)
    const updateUserDetails =(e)=>{
        console.log(e.target.value);
        let tempuser = {...user};
        tempuser[e.target.name] = e.target.value
        updateDetails(tempuser)
    }
    return (
        <div className="row">
            <div class = "mb-3">
                <label for="fromGroupExampleInput"
                class = "from-label">User Name</label>
                <input type="text" class="form-control"
                id="formGroupExampleInput"
                name="username"
                onChange={updateUserDetails}
                placeholder="Enter user name"/>
            </div>
            <div class = "mb-3">
                <label for="fromGroupExampleInput"
                class = "from-label">Password</label>
                <input type="text" class="form-control"
                id="password"
                name="password"
                onChange={updateUserDetails}
                placeholder="Enter password"/>
            </div>
            
            <h4>{JSON.stringify(user)}</h4>
        </div>
    )
}

export default Textbox;
