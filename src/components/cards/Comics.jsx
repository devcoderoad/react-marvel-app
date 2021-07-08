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

function Comics({ props }) {
  const { comics } = props
  return (
    <CardGroup>
      {comics && comics.status === 'loading' ? (
        <Row className="mx-auto my-5">
          <Spinner size="sm" color="primary" />
        </Row>
      ) : (
        comics.data.results &&
        comics.data.results.map((comic) => {
          return (
            <Col xs="12" md="6" lg="8" className="mx-auto" key={comic.id}>
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
                        href={comic.url}
                        title={comic.title}
                        className="App-link border border-light d-block"
                      >
                        {comic.thumbnail && (
                          <img
                            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                            alt={comic.title}
                            style={{ display: 'block', width: '100%' }}
                          />
                        )}
                      </a>
                      <div style={{ textAlign: 'left', marginTop: '.5rem' }}>
                        <div className="small">
                          <div className="font-weight-bold">Creators:</div>
                          {comic.creators.available &&
                            comic.creators.items.map((creator) => {
                              return (
                                <span
                                  className="mr-2"
                                  key={`${creator.name}`}
                                  data-rel={creator.role}
                                >
                                  {creator.name}{' '}
                                </span>
                              )
                            })}
                        </div>
                      </div>
                    </Col>
                    <Col style={{ paddingLeft: '.5rem' }}>
                      <div>
                        <h4>{comic.title}</h4>
                        <p className="small font-weight-light">
                          {comic.description}
                        </p>
                      </div>
                      <div
                        style={{
                          fontSize: '.88rem',
                          color: 'rgb(158 158 158)',
                          fontWeight: 'bold'
                        }}
                      >
                        <div className="small">Page: {comic.pageCount}</div>
                        {comic.dates &&
                          comic.dates[0] &&
                          comic.dates[0].type &&
                          comic.dates[0].type === 'onsaleDate' && (
                            <div className="small">
                              Date Sale:{' '}
                              {format(
                                new Date(comic.dates[0].date),
                                'MM/dd/yyyy'
                              )}
                            </div>
                          )}
                      </div>
                      <Row>
                        {comic.images.length > 1 &&
                          comic.images.map((image) => {
                            return (
                              <img
                                key={image.path}
                                className="border border-dark mr-1 mb-1"
                                width="40%"
                                alt={`${image.path}.${image.extension}`}
                                src={`${image.path}.${image.extension}`}
                              />
                            )
                          })}
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="bg-dark">
                  {comic.characters && comic.characters.available > 0 && (
                    <>{comic.characters.items[0].name}</>
                  )}
                  <a href="#" className="text-secondary float-right">
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

export default Comics
