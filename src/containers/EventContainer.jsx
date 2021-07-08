import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

/* components */
import Layout from '../components/layout/Layout'

/* page */
import Event from '../pages/Event'

/* stores */
// import * as action from './store/actions/index';
import { onInitLoad } from '../store/actions/index'

function EventContainer(props) {
  const { dispatch } = props

  /* states */
  const [isLoading, setLoading] = useState(true)

  /* effects */
  useEffect(() => {
    if (dispatch) {
      const defaultParams = {
        format: '',
        formatType: ''
      }
      dispatch(onInitLoad('characters', defaultParams))
    }
  }, [dispatch, isLoading])

  // useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   }
  // }, [isLoading]);

  const pageProps = { isLoading }
  // const pageProps = {}

  return (
    <Layout {...pageProps}>
      <Event props={props} />
    </Layout>
  )
}
const mapStateToProps = (state) => {
  return {
    storeEvents: state.storeEvents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)
