import React from 'react'
import { Row, Container } from 'reactstrap'

/* navbar */
import Navbar from '../components/navbar/Navbar'

/* card */
import Creators from '../components/cards/Creators'

function Creator({ props }) {
  const { storeCreators } = props

  return (
    <Row>
      <Container>
        <Navbar />
        <Creators props={{ creators: storeCreators }} />
      </Container>
    </Row>
  )
}

export default Creator
