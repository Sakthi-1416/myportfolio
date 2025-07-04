import { useState } from 'react'
import './App.css'
import './index.css'


import { Header } from './Header'
import { Content } from './Content'
import {About} from './About'
import { Skills } from './Skills'
import { Contact } from './Contact'
import { Projects } from './Projects'
import { Footer } from './Footer'

function App() {
  

  return (
   <div>
    <Header/>
    <Content/>
    <About/>
     <Skills/>   
     <Projects/>
    <Contact/>
    <Footer/>
   </div>
  )
}

export default App
