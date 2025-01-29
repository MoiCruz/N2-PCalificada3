import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Details } from './pages/Details'
import { Features } from './pages/Features'
import { Projects } from './pages/Projects'
import { Team } from './pages/Team'
import { Contact } from './pages/Contact'

export default function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </>

  )
}
