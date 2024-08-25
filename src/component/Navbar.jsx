import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaFacebook } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { PiVideoLight } from "react-icons/pi";
import { IoPeopleCircle } from "react-icons/io5";
import { VscGame } from "react-icons/vsc";
import { BiSolidCategory } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import "../css/nav.scss"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';


const icons =
[
  {
    icon: <IoHomeOutline size={30}/>,
    href: "/"
  },
  {
    icon: <PiVideoLight size={30} />,
    href: "/video"
  },
  {
    icon: <TiWeatherPartlySunny size={32} />,
    href: "/weather"
  },
  {
    // icon:      <VscGame size={30} />,
    icon:      <IoPeopleCircle size={30} />,
    href: "/people"
  }
]

const Navbars = () => {
  const [checkedDiv, setCheckedDiv] = useState();
  const navigate = new useNavigate()

  function handleClickedIcon(index) {
      setCheckedDiv(index)
  }
  function handleLogout() {
    Cookies.remove("FaceClone")
    Swal.fire({
      title: "Đăng xuất thành công",
      icon: "success"
    }); 
    navigate("/login")
    // logout()
    // .then(resp =>{
    //   console.log(resp);
    // })
    // .catch(error =>{
    //   console.log(error);
    // })
  }

  return (
    <Navbar expand="lg" className="fixed border-b shadow-slate-900 sticky-top mb-2 bg-white">
      <Container fluid className='justify-between nav_container'>
        <div className='ms-2 flex nav_left'>
          <Link to={"/"}>
              <FaFacebook size={40} color='blue' />
          </Link>
          <div className="relative ms-4">
            <label htmlFor="Search" className="sr-only "> Search </label>
            <input
              type="text"
              id="Search"
              placeholder="Tìm kiếm trên Facebook"
              className="w-full rounded-md border-gray-200 py-2.5 shadow-sm sm:text-sm ps-5"
            />
            <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
              <button type="button" className="text-gray-600 hover:text-gray-700">
                <span className="sr-only ">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div className='flex flex-wrap gap-1 nav_center' >
          {
            icons.map((value, index) =>
              <Link to={value.href} key={value.href}>
                <div className={`p-2 w-[7rem] flex rounded justify-center align-center ${checkedDiv === index
                    ? 'bg-blue-400 text-dark border-b-4'
                    : 'text-dark'
                  }`}  onClick={() => handleClickedIcon(index)}>
                    {value.icon}  
                </div>
              </Link>
            )
          }
        </div>
        <div className='flex'>
          <div className='p-[10px] border ms-1 rounded-full bg-slate-100'>
            <BiSolidCategory size={25} />
          </div>
          <div className='p-[10px] border ms-1 rounded-full bg-slate-100'>
            <FaFacebookMessenger size={25} />

          </div>
          <div className='p-[10px] border ms-1 rounded-full bg-slate-100'>
            <IoNotifications size={25} />

          </div>
          <NavDropdown className='p-[10px] me-5 w-full border ms-1 rounded-full bg-slate-100'>
            <Button className='' onClick={handleLogout}>Đăng xuất</Button>
          </NavDropdown >
        </div>
      </Container>
    </Navbar>
  )
}

export default Navbars
