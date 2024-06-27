import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const LayoutPage = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutPage
