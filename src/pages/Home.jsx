import React from 'react'
import { Row, Container } from 'reactstrap'

/* navbar */
import Navbar from '../components/navbar/Navbar'

/* card */
import Comics from '../components/cards/Comics'

/* paginate */
import Paginate from '../components/elements/Paginate'

function Home({ props, params }) {
  const { storeComics, dispatch } = props
  return (
    <Row>
      <Container>
        <Navbar />
        <Comics props={{ comics: storeComics }} />
        <Paginate
          props={{ ...storeComics, dispatch, route: 'comics', params }}
        />
      </Container>
    </Row>
  )
}

export default Home
