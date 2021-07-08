import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

/* components */
import Layout from '../components/layout/Layout'

/* page */
import Serie from '../pages/Serie'

/* stores */
// import * as action from './store/actions/index';
import { onInitLoad } from '../store/actions/index'

function SerieContainer(props) {
  const { dispatch } = props

  /* states */
  const [isLoading, setLoading] = useState(true)

  const defaultParams = {
    format: '',
    formatType: ''
  }

  /* effects */
  useEffect(() => {
    if (dispatch) {
      if (dispatch(onInitLoad('series', defaultParams))) {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }
  }, [dispatch, isLoading])

  // useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 1000)
  //   }
  // }, [isLoading])

  const pageProps = { isLoading }
  // const pageProps = {}

  return (
    <Layout {...pageProps}>
      <Serie props={props} />
    </Layout>
  )
}
const mapStateToProps = (state) => {
  return {
    storeSeries: state.storeSeries
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieContainer)
