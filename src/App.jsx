import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Slider from './components/Slider'
import SectionCardapio from './components/SectionCardapio'



function App() {

  return (
    <div id='body'>
      <Header/>
      <Slider/>
      <SectionCardapio/>
    </div>
  )
}
export default App
