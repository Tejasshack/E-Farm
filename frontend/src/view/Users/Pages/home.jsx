import React from "react"
import Navbar from "../../../Components/Users/Navbar/navbar"
import Home from "../public/home"
import Footer from "../../../Components/Users/Footer/footer"
// import { Chatbot } from '../../../Components/Users/Chatbot';

function home() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Chatbot/> */}
      <Footer />
    </div>
  )
}

export default home
