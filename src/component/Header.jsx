import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { FaCamera } from "react-icons/fa";
import '../css/header.scss'
import Container from 'react-bootstrap/esm/Container';
const Header = () => {
  return (
    <Container>
      <header className='bg-slate-300	w-full h-[27rem] rounded relative'>
          <div className='header_button absolute end-10 bottom-10 w-[10rem] h-[2.7rem]'>
              <Button className='flex w-full h-full bg-white text-dark justify-content-center align-item-center'>
                  <FaCamera className='absolute mt-[5px]' size={20}/>
                  <p className='ms-4 mt-[4px]'>
                      Thêm ảnh bìa
                  </p>
              </Button>
          </div>
      </header>

    </Container>
  )
}

export default Header
