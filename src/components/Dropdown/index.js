const Dropdown =()=>{
    const countryList=[
        {
            code:"IN",
            name:"India"
        },
        {
            code:"USA",
            name:"United States Of America"
        }
    ];

    const bindOption=()=>{
       return countryList.map((item,index)=>{
            return(
                <option value={item.code}>{item.name}</option>
            )
        })
    }
    
    return(
        <div className="form-group">
            <select className="form-control">
                <option>Please select</option>
                {bindOption()}
            </select>
        </div>
    )
}

export default Dropdown;