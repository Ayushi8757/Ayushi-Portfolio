import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/Home'
import About from './components/About'
import './index.css'
import Project from './components/Project'
import Contact from './components/Contact'
function App() {
      const [isloading,setIsloaded]=useState(false)
      const[menuOpen,setMenuOpen]=useState(false)
  return (
    <>
    {!isloading &&  <LoadingScreen onComplete={()=>setIsloaded(true)}/>}
    <div className={`min-h-screen transition-opacity duration-700 ${isloading ?"opacity-100":"opacity-0"} bg-black text-gray-100`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      </div> 
    </>
  )
}

export default App
