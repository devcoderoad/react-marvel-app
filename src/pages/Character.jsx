import React from 'react'
import { Row, Container } from 'reactstrap'

/* components */
import Navbar from '../components/navbar/Navbar'
import FilterAtoZ from '../components/elements/FilterAtoZ'
import Characters from '../components/cards/Characters'
import Paginate from '../components/elements/Paginate'

function Character({ props }) {
  const { storeCharacters, dispatch } = props

  return (
    <Row>
      <Container>
        <Navbar />
        <FilterAtoZ props={{ dispatch, route: 'characters' }} />
        <Characters props={{ characters: storeCharacters }} />
        <Paginate
          props={{ ...storeCharacters, dispatch, route: 'characters' }}
        />
      </Container>
    </Row>
  )
}

export default Character
