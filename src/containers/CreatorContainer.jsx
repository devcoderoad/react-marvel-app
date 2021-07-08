import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

/* components */
import Layout from '../components/layout/Layout'

/* page */
import Creator from '../pages/Creator'

/* stores */
// import * as action from '../store/actions/index';
import { onInitLoad } from '../store/actions/index'

function CreatorContainer(props) {
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
      // dispatch(action.onInitLoad());
      if (dispatch(onInitLoad('creators', defaultParams))) {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
      // dispatch(onInitLoad());
    }
  }, [dispatch, isLoading])

  // useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 1000)
  //   }
  // }, [isLoading])

  // const pageProps = { isLoading, stateLayout, stateTheme };
  const pageProps = { isLoading }
  // const pageProps = {}

  return (
    <Layout {...pageProps}>
      <Creator props={props} />
    </Layout>
  )
}
const mapStateToProps = (state) => {
  return {
    storeCreators: state.storeCreators
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorContainer)
