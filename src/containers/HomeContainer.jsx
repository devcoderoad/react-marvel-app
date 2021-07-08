import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

/* components */
import Layout from '../components/layout/Layout'

/* page */
import Home from '../pages/Home'

/* stores */
// import * as action from './store/actions/index';
import { onInitLoad } from '../store/actions/index'

function HomeContainer(props) {
  const { dispatch } = props

  /* states */
  const [isLoading, setLoading] = useState(true)

  let params = {
    format: 'digest',
    formatType: 'collection'
  }

  /* effects */
  useEffect(() => {
    if (dispatch) {
      if (dispatch(onInitLoad('comics', params))) {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }
  }, [dispatch, isLoading])

  const pageProps = { isLoading }

  return (
    <Layout {...pageProps}>
      <Home props={props} params={params} />
    </Layout>
  )
}
const mapStateToProps = (state) => {
  return {
    storeComics: state.storeComics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
