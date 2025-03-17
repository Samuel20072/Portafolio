import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { Header } from './layouts/Header/Header.jsx'
import { Home } from './pages/Home.jsx'
import { Studies } from './pages/Studies.jsx'
import { TechnicalSkills } from './pages/TechnicalSkills.jsx'
import { SocialSkills } from './pages/SocialSkills.jsx'
import { ProfessionalExperience } from './pages/ProfessionalExperience.jsx'
import { Footer } from './layouts/Footer/Footer.jsx'
import './index.css'

export const App = () => {
  return (
    <>
      <Header/>
      <container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/studies' element={<Studies/>}/>
          <Route path='/TechnicalSkills' element={<TechnicalSkills/>}/>
          <Route path='/SocialSkills' element={<SocialSkills/>}/>
          <Route path='/ProfessionalExperience' element={<ProfessionalExperience/>}/>
        </Routes>
       
      </container>
     <Footer/>
    </>
  )
}

