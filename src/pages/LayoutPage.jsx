import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../component/footer/Footer'
import Navbar from '../component/header/Navbar'

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
