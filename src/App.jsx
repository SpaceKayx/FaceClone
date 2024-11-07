import './App.css'
import {Routes, Route } from "react-router-dom";
import Weather from './component/body/weather/Weather' 

import Home from './component/Home'
import AuthPage from './pages/LoginPage';
import LayoutPage from './pages/LayoutPage';
import RegisterPage from './pages/RegisterPage';
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
            {/* <Route path='/people' element={<PetManagement/>}/> */}
          </Route>
        </Routes>
    </>
  )
}

export default App
