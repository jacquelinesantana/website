import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import Home from './componentes/pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
  )
}

export default App
