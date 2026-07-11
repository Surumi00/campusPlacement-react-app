import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addregistartion from './assets/components/Addregistartion'
import SearchRegistration from './assets/components/SearchRegistration'
import Deleteregistration from './assets/components/Deleteregistration'

function App() {
  

  return (
    <>
      <Addregistartion/>
      <SearchRegistration/>
      <Deleteregistration/>
    </>
  )
}

export default App
