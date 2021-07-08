import React from 'react'

const ContextLayout = React.createContext(
  {
    layout: 'default',
    copyright: '',
    attributionHTML: '',
    attributionText: ''
  },
  () => {}
)
// const ContextLayout = React.createContext();
export default ContextLayout
