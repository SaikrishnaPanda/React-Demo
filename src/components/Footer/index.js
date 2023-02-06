const Footer = (props)=>{
    return(
        <div className="container-fluid">
            <hr/>
            <div className="row">
                <idv className="col">
                    About us
                </idv>
                <idv className="col">
                    Our Team
                </idv>
                <idv className="col">
                    Contact Us
                </idv>
                <idv className="col">
                    <a href="#">{props.email}</a>
                </idv>
            </div>
        </div>
    )
}
export default Footer;