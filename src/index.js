import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import './theme.scss'

/* app */
import App from './App'

/* pages */
import Character from './containers/CharacterContainer'
import Creator from './containers/CreatorContainer'
import Event from './containers/EventContainer'
import Serie from './containers/SerieContainer'
import Page404 from './pages/Page404'

import * as serviceWorker from './serviceWorker'

/* redux */
import { Provider } from 'react-redux'
import configureStore from './store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/characters" component={Character} />
        <Route path="/characters/:slug" component={Character} />
        <Route path="/creators" component={Creator} />
        <Route path="/events" component={Event} />
        <Route path="/series" component={Serie} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
