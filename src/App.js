import Header from "./components/Header"
import Footer from "./components/Footer"
import Table from "./components/Table"
import "./App.css"
import Details from "./components/Details"

const App =()=>{
  const companyName = "Capgemini";
  const address = "India";
  const emailaddress = "Career@Capgemini.com"
  return(
    <div className="container-fluid">
      <Header company ={companyName} location = {address}/>
      <h1>Welcome to Capgemini</h1>
      <Table/>
      <Details></Details>
      <Footer email = {emailaddress}/>
    </div>
  )
}

export default App