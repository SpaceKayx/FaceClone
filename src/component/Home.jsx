import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from './Header'
import Section from './Section'
import Body from './Body'

const Home = () => {
  return (
    <div>
      <Container fluid className='bg-gray'>
        <Header />
        <Container >
          <Section />
        </Container>
      </Container>
      <Container fluid className='bg-slate-200'>
        <Body />
      </Container>
    </div>
  )
}

export default Home
