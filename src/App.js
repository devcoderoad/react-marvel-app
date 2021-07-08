import React, { useContext, useState, useEffect } from 'react'
import ReactGA from 'react-ga'

/* App */
import './App.css'

/* contexts */
import ContextLayout from './contexts/ContextLayout'
import ContextTheme from './contexts/ContextTheme'

/* pages */
import HomeContainer from './containers/HomeContainer'

function App(props) {
  const { dispatch } = props
  const isProd = process.env.NODE_ENV !== 'development'

  /* contexts */
  const layout = useContext(ContextLayout)
  const theme = useContext(ContextTheme)

  /* states */
  const [stateLayout, setStateLayout] = useState(layout)
  const [stateTheme, setStateTheme] = useState(theme)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (isProd) {
      ReactGA.initialize('UA-123722350-5')
      ReactGA.pageview(window.location.pathname)
    }
  }, [isProd])

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [isLoading])

  useEffect(() => {
    setStateTheme({ theme: 'light' })
    setStateLayout({ layout: 'compact' })
  }, [])

  const pageProps = { isLoading, stateLayout, stateTheme, dispatch }

  return (
    <ContextLayout.Provider values={[stateLayout, setStateLayout]}>
      <ContextTheme.Provider values={[stateTheme, setStateTheme]}>
        <HomeContainer {...pageProps} />
      </ContextTheme.Provider>
    </ContextLayout.Provider>
  )
}

export default App
