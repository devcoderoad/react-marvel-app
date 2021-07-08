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

function Series({ props }) {
  const { series } = props
  return (
    <CardGroup>
      {series && series.status === 'success' ? (
        ''
      ) : (
        <Row className="mx-auto mb-2">
          <Spinner size="sm" color="primary" />
        </Row>
      )}
      {series.data.results &&
        series.data.results.map((serie) => {
          return (
            <Col xs="12" md="6" lg="8" className="mx-auto" key={serie.id}>
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
                        href={serie.url}
                        title={serie.title}
                        className="App-link border border-light d-block"
                      >
                        {serie.thumbnail && (
                          <img
                            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                            alt={serie.title}
                            style={{ display: 'block', width: '100%' }}
                          />
                        )}
                      </a>
                      <div style={{ textAlign: 'left', marginTop: '.5rem' }}>
                        <div className="small">
                          <div className="font-weight-bold">Creators:</div>
                          {serie.creators.available &&
                            serie.creators.items.map((creator) => {
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
                        <h4>{serie.title}</h4>
                        <p className="small font-weight-light">
                          {serie.description}
                        </p>
                      </div>
                      <div
                        style={{
                          fontSize: '.88rem',
                          color: 'rgb(158 158 158)',
                          fontWeight: 'bold'
                        }}
                      >
                        {/* <div className="small">Page: {serie.pageCount}</div> */}
                        {/* {serie.dates[0].type === 'onsaleDate' &&
                        <div className="small">Date Sale: {format(new Date(serie.dates[0].date),'MM/dd/yyyy')}</div>
                      } */}
                        {serie.startYear && (
                          <div className="small">
                            Year:{' '}
                            {format(new Date(serie.startYear), 'MM/dd/yyyy')}
                          </div>
                        )}
                      </div>
                      <Row>
                        {/* {serie.images.length > 1 && serie.images.map(image=>{return <img key={image.path} className="border border-dark mr-1 mb-1" width="40%" alt={`${image.path}.${image.extension}`} src={`${image.path}.${image.extension}`}/>;})} */}
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="bg-dark">
                  {serie.characters && serie.characters.available > 0 && (
                    <>{serie.characters.items[0].name}</>
                  )}
                  <a href="#" className="text-secondary float-right">
                    <span>&bull;&bull;&bull;</span>
                  </a>
                </CardFooter>
              </Card>
            </Col>
          )
        })}
    </CardGroup>
  )
}

export default Series
