import React from 'react'
import { Row, Container } from 'reactstrap'

/* navbar */
import Navbar from '../components/navbar/Navbar'

/* card */
import Events from '../components/cards/Events'

function Event({ props }) {
  const { storeEvents } = props

  return (
    <Row>
      <Container>
        <Navbar />
        <Events props={{ events: storeEvents }} />
      </Container>
    </Row>
  )
}

export default Event
