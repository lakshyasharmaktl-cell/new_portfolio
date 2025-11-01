import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Tech from './Components/Tech'
import Expr from './Components/Expr'
import Project from './Components/Project'
import Contacts from './Components/Contacts'
import Fotter from './Components/Fotter'

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Tech />
      <Expr />
      <Project />
      <Contacts />
      <Fotter />
    </div>
  )
}
