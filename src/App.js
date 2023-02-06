import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

const App =()=>{
  const companyName = "Capgemini";
  const address = "India";
  const emailaddress = "Career@Capgemini.com"
  return(
    <div className="container-fluid">
      <Header company ={companyName} location = {address}/>
      <h1>Welcome to Capgemini</h1>
      <Footer email = {emailaddress}/>
    </div>
  )
}

export default App