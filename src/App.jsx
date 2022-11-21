import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Index"
import {Router} from "./Router"
import "./global.css"
import Footer from "./components/Footer/Index"



function App() {

  return (
    
      <BrowserRouter>
        <Header />
        <div className="container">
        <Router />
        </div>
        <Footer/>
      </BrowserRouter>
    
  )
}

export default App
