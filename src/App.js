import Header from "./components/Header"
import Footer from "./components/Footer"
import Table from "./components/Table"
import "./App.css"
import Details from "./components/Details"
import Textbox from "./components/Textbox"
import { useState } from "react"
import Display from "./components/Display"
import Toggle from "./components/Toggle"

const App =()=>{
  const companyName = "Capgemini";
  const address = "India";
  const emailaddress = "Career@Capgemini.com"
  const [personalInfo,updateUserInfo]=useState({})

  const fetchUpdates =(data)=>{
    updateUserInfo(data)
  }
  return(
    <div className="container-fluid">
      <Header company ={companyName} location = {address}/>
      <div>
        <Textbox update ={fetchUpdates}/>
        <Display display={personalInfo}/>
      </div>
      <Toggle/>
      <h1>Welcome to Capgemini</h1>
      <Table/>
      <Details/>
      <Footer email = {emailaddress}/>
    </div>
  )
}

export default App