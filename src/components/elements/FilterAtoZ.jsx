import React from 'react'
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from 'react-router-dom'

import { ATOZ } from '../../constants/vars'

function FilterAtoZ({ props }) {
  const { route } = props

  return (
    <div className="mb-5">
      {ATOZ &&
        ATOZ.map((item) => {
          return (
            // <a href={`${route}/${item}`} title={item} key={item}>
            //   {item}
            // </a>
            <Link to={`/${route}/${item}`} key={item}>
              {item}
            </Link>
          )
        })}
    </div>
  )
}

export default FilterAtoZ
