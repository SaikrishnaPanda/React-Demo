import Table from "../Table";

const Details =()=>{
    const product=[
        {
        id:1,
        imageUrl:"https://phonefixed.com.au/assets/frontend/images/banner_phone.png",
        name:"iPhone",
        version:"14 pro",
            features:{
                camera :"8MP",
                memeory : "128GB",
                processor :"appleProcessor"
            }
        },
        {        
        id:2,
        imageUrl:"https://th.bing.com/th/id/OIP.wcx2uzkIqkSwl9Pu7XkA5AHaHa?pid=ImgDet&rs=1",
        name:"Samsung",
        version:"S21 5G",
            features:{
                camera :"14MP",
                memeory : "128GB",
                processor :"samsungProcessor"
            }
        }
    ]
    return(
        <table className="table">
            <tbody>
                {product.map((item)=>{
                        return(
                            <tr>
                                <div className="row">
                                    <div className="col-4">
                                        <div className ="card">
                                            <img src={item.imageUrl} 
                                                // height = "200px"
                                                // width = "200px"
                                                class="rounded mx-auto d-block"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{item.version}</h6>
                                                <p className="card-text">Features</p>
                                                <a href="#" className="card-link">{item.features.camera}</a>
                                                <a href="#" className="card-link">{item.features.memeory}</a>
                                                <a href="#" className="card-link">{item.features.processor}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    )
}
export default Details;