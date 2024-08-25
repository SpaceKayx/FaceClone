import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from './Header'
import Section from './Section'
import Body from './Body'
import { listEmployees, selectByUsername } from '../service/EmployeeService'
import { useNavigate } from 'react-router'
import { getAboutMe } from '../service/AccountService'
import { myAccount } from '../entity/Account'
import Swal from 'sweetalert2'

function notify(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}

const Home = () => {
  const [account, setAccount] = useState({})
  // const {setUserContext} = useContext(myAccount)
  const navigate = new useNavigate()
  useEffect(() => {
    getAboutMe()
      .then((resp) => {
        // console.log(resp);
        setAccount(resp.data)
        // setUserContext(resp.data)
      })
      .catch((error) => {
        console.log(error)
        console.log(error.code);
        if (error.code == 'ERR_NETWORK' || error.code == 'ERR_CONNECTION_REFUSED')
          notify("Lỗi hệ thống mạng", "Lỗi mạng do máy chủ hoặc máy khách", "warning")
        if (error.response.data.message == 'No static resource signin.')
          navigate("/login")
      }
      )
  }, [])

  console.dir(account);
  return (
    <div>
      <Container fluid className='bg-gray'>
        <Header />
        <Container >
          <Section props={{ account }} />
        </Container>
      </Container>
      <Container fluid className='bg-slate-200'>
        <Body props={{ account }} />
      </Container>
    </div>
  )
}

export default Home
