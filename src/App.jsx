import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import SkillLevel from './components/SkillLevel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <SkillLevel/>
    </>
  )
}

export default App
