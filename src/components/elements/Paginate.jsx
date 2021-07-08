import React from 'react'

// import { connect } from 'react-redux'

// import {
//   Spinner,
//   Row,
//   Col,
//   CardGroup,
//   Card,
//   CardBody,
//   CardFooter,
// } from 'reactstrap';

// import format from 'date-fns/format';
// import formatDistance from 'date-fns/formatDistance';
import { onInitLoad, onInitNextPage } from '../../store/actions/index'

function Paginate({ props }) {
  const {
    data: { count = 0, limit = 0, offset = 0, total = 0 },
    params,
    dispatch,
    route
  } = props

  /* effects */
  // useEffect(() => {
  //   if (dispatch) {
  //     dispatch(onInitNextPage({ count, limit, offset, total }));
  //   }
  // }, [dispatch]);

  const onPaginate = (e, query) => {
    e.preventDefault()
    dispatch(onInitLoad(route, query))
  }

  return (
    <a
      onClick={(e) => onPaginate(e, { count, limit, offset, total, ...params })}
      className="mt-5 mb-3"
    >
      Next
    </a>
    // <Link to={route}>Next</Link>
  )
}

export default Paginate
// export default connect((state) => state)(Paginate)
