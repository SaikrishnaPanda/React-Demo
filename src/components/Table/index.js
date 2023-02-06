const Table =()=>{
    const users = [{name:"Kiran",age:30,profession:"Engineer"},
    {name:"Saik",age:23,profession:"Actor"},
    {name:"Richa",age:22,profession:"Student"}]

    const tbody = users

    return(
        <table className="table">
            <thead>
                <th>S.No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Profession</th>
            </thead>
            <tbody>
                {users.map((item,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.profession}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table;