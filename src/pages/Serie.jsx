import React from 'react'
import { Row, Container } from 'reactstrap'

/* navbar */
import Navbar from '../components/navbar/Navbar'

/* card */
import Series from '../components/cards/Series'

function Serie({ props }) {
  const { storeSeries } = props

  return (
    <Row>
      <Container>
        <Navbar />
        <Series props={{ series: storeSeries }} />
      </Container>
    </Row>
  )
}

export default Serie
