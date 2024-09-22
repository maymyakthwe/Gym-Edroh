import Navbar from "@/scenes/Navbar/Navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/share/types"
import Home from "./scenes/Home/Home"
import Benefits from "./scenes/Benefits/Benefits"
import Classes from "./scenes/Classes/Classes"
import Contact from "./scenes/Contact/Contact"
import Footer from "./scenes/Footer/Footer"

function App() {

  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
  const [isTopofPage,setIsTopofPage]=useState<boolean>(true)

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY ===0){
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY!==0){
        setIsTopofPage(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>window.removeEventListener('scroll',handleScroll);
  },[])

  return (
    <div className="app bg-gray-20" >
      <Navbar 
        isTopofPage={isTopofPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer/>
    </div>
  )
}

export default App
