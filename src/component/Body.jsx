import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Article from './Article'
import Aside from './Aside'
import "../css/body.scss"

const Section = ({props}) => {
 
  const {account} = props

  return (
    <Container>
        <div className='row flex body_jsx'>
            <Article props={{account}}/>
            <Aside props={{account}}/>
        </div>
    </Container >
  )
}
export default Section
