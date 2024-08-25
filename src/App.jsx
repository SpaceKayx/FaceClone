import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import {Routes, Route } from "react-router-dom";
import Weather from './component/Weather' 

import Home from './component/Home'
import ListEmployee from './component/ListEmployee';
import EmployeeComponent from './component/EmployeeComponent';
import AuthPage from './pages/LoginPage';
import LayoutPage from './pages/LayoutPage';
import RegisterPage from './pages/RegisterPage';
import Video from './component/Video';
import PaymentStatus from './component/PaymentStatus';
import { useState } from 'react';
import Swal from 'sweetalert2';
function App() {
  const pageTitle = () =>{
    document.title = 'FaceClone'
  }
  pageTitle()
   
  return (
    <>
        <Routes>
          <Route path='/login' element={<AuthPage />}></Route>
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<Home/>} />
            <Route path='/weather' element={<Weather/>}/>
            <Route path='/people' element={<ListEmployee/>}/>
            <Route path='/add-employee' element={<EmployeeComponent/>}/>
            <Route path='/update-employee/:id' element={<EmployeeComponent/>}/>
            <Route path='/video' element={<Video/>} />
            <Route path='/booking/payment-status' element={<PaymentStatus/>} />
          </Route>
        </Routes>
    </>
  )
}

export default App
