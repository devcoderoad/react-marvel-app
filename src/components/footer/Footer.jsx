import React, { useContext } from 'react'
import ContextLayout from '../../contexts/ContextLayout'

function Footer(props) {
  const dateNow = new Date()

  /* contexts */
  const { stateLayout } = props
  const colors = useContext(ContextLayout)
  // console.log(colors);

  return (
    <footer className="App-footer text-light my-2">
      <span className="text-secondary">
        Generated:{' '}
        {`${dateNow.getDate()}/${dateNow.getMonth()}/${dateNow.getFullYear()}`}.
      </span>{' '}
      <span className="text-secondary mb-2">
        Source code at{' '}
        <a href="https://github.com/dyarfi/marvel-comic-app">GitHub</a>.
      </span>
      <p>{stateLayout && stateLayout.attributionText}</p>{' '}
      {/* {stateLayout && stateLayout.attributionHTML} */}
    </footer>
  )
}

export default Footer
