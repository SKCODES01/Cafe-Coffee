import React, { useEffect } from 'react'
import AOS, { init } from "aos";
import "aos/dist/aos.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home.jsx"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner.jsx"
import AppStore from "./components/AppStore/AppStore.jsx"
import Testimonial from "./components/Testimonial/Testimonial.jsx"
import Footer from "./components/Footer/Footer.jsx"







const App = () => {
  useEffect(() => {
    AOS,init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    })
  })
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Home/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App