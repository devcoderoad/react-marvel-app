import React from 'react'

import {
  Spinner,
  Row,
  Col,
  CardGroup,
  Card,
  CardBody,
  CardFooter
} from 'reactstrap'

import format from 'date-fns/format'

function Characters({ props }) {
  const { characters } = props
  return (
    <CardGroup>
      {characters && characters.status === 'loading' ? (
        <Row className="mx-auto my-5">
          <Spinner size="sm" color="primary" />
        </Row>
      ) : (
        characters.data.results &&
        characters.data.results.map((character) => {
          return (
            <Col xs="12" md="6" lg="8" className="mx-auto" key={character.id}>
              <Card
                style={{
                  textAlign: 'left',
                  backgroundColor: '#555555',
                  marginBottom: '2.5rem',
                  padding: '1rem',
                  borderRadius: '10px'
                }}
              >
                <CardBody>
                  <Row>
                    <Col style={{ textAlign: 'center' }}>
                      <a
                        href={character.url}
                        title={character.title}
                        className="App-link border border-light d-block"
                      >
                        {character.thumbnail && (
                          <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.title}
                            style={{ display: 'block', width: '100%' }}
                          />
                        )}
                      </a>
                    </Col>
                    <Col style={{ paddingLeft: '.5rem' }}>
                      <div>
                        <h4>{character.name}</h4>
                        <p className="small">
                          Date:{' '}
                          {format(new Date(character.modified), 'MM/dd/yyyy')}
                        </p>
                        <p className="small font-weight-light">
                          {character.description}
                        </p>
                      </div>
                      {character.series && character.series.available > 0 && (
                        <div>
                          <h5>Series:</h5>
                          <p>
                            {character.series.items.map((series) => {
                              return (
                                <small key={series.name} className="d-block">
                                  {series.name}
                                </small>
                              )
                            })}
                          </p>
                        </div>
                      )}
                      <div
                        style={{
                          fontSize: '.88rem',
                          color: 'rgb(158 158 158)',
                          fontWeight: 'bold'
                        }}
                      ></div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="bg-dark">
                  {character.characters &&
                    character.characters.available > 0 && (
                      <>{character.characters.items[0].name}</>
                    )}
                  <a href="#test" className="text-secondary float-right">
                    <span>&bull;&bull;&bull;</span>
                  </a>
                </CardFooter>
              </Card>
            </Col>
          )
        })
      )}
    </CardGroup>
  )
}

export default Characters
