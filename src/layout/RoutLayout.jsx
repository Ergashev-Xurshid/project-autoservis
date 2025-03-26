import React from 'react'
import Navbar from '../components/Navbar'
import Footr from '../components/Footr'
import { Outlet } from 'react-router-dom'

function RoutLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footr />
      </footer>
    </>
  )
}

export default RoutLayout