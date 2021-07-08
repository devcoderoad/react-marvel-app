import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

/* components */
import Layout from '../components/layout/Layout'

/* page */
import Character from '../pages/Character'

/* stores */
// import * as action from './store/actions/index';
import { onInitLoad } from '../store/actions/index'

function CharacterContainer(props) {
  const { dispatch } = props

  /* routes */
  const route = 'characters'
  const routeMatch = useRouteMatch(`/${route}/:slug`)
  const slug = routeMatch?.params?.slug

  /* states */
  const [isLoading, setLoading] = useState(true)
  const [defaultParams, setDefaultParams] = useState({
    orderBy: 'name',
    ...(slug && { nameStartsWith: slug })
  })

  useEffect(() => {
    if (dispatch(onInitLoad('characters', defaultParams))) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [])

  const pageProps = { isLoading }

  return (
    <Layout {...pageProps}>
      <Character props={props} />
    </Layout>
  )
}
const mapStateToProps = (state) => {
  return {
    storeCharacters: state.storeCharacters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer)
