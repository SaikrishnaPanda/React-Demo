const Display=(props)=>{
    return (<div>
        <h6>{JSON.stringify(props.display)}</h6>
    </div>)
}
export default Display;
//flow here is
//text box is going to send the data to app
//app again resend the to display