import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addregistartion from './assets/components/Addregistartion'
import SearchRegistration from './assets/components/SearchRegistration'
import Deleteregistration from './assets/components/Deleteregistration'
import ViewRegistration from './assets/components/ViewRegistration'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Addregistartion/>}/>
      <Route path='/search' element={<SearchRegistration/>}/>
          <Route path='/delete' element={<Deleteregistration/>}/>
          <Route path="/Viewall" element={<ViewRegistration />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
