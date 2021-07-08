/* fetch library */
import axios from 'axios'

/* actions */
import ACTION_TYPES from '../../constants/actionTypes'

/* utils */
import { parseParams, isEmptyObject } from '../../utils/helper'

/* base url */
const baseURL = 'https://gateway.marvel.com/v1/public/'
// params setup
const aKeyPub = process.env.REACT_APP_PUBLIC_KEY
// the result of md5(ts+privateKey+publicKey) in your developer.marvel.com account
const hashKey = process.env.REACT_APP_HASH_KEY
// api routes and params to request
const defaultApiRoute = 'comics'
const defaultParams = {
  // default
  ts: '1234', // timestamp
  // format: 'digest',
  // formatType: 'collection',
  // orderBy: 'name',
  // orderBy: 'title',
  // orderBy: 'onsaleDate',
  // authorization
  apikey: aKeyPub,
  hash: hashKey,
  // limit and offset
  limit: 10
}

/* init load */
// routes comics, stories || characters || comic
export const onInitLoad =
  (apiRoute = defaultApiRoute, params = {}) =>
  async (dispatch) => {
    // delete params.count
    // delete params.total
    // const test = {}
    // console.log(isEmptyObject(params), params)
    // console.log(params)
    let allParams = {}
    if (isEmptyObject(params)) {
      /* authorization and default params checking */
      allParams.apikey = defaultParams.apikey
      allParams.hash = defaultParams.hash
      allParams.ts = defaultParams.ts
      allParams.limit = defaultParams.limit
    } else {
      allParams = {
        ...params,
        ...defaultParams,
        ...(params.count && {
          limit: params.count,
          offset:
            params.count + params.offset || params.offset + defaultParams.limit
        })
        // limit:
        // defaultParams.limit >= params.offset &&
        // defaultParams.limit + params.offset,
        // params.offset + defaultParams.limit,
      }
      // offset
    }
    // console.log(allParams)
    // console.log(params); onsaleDate
    const typeAction = () => {
      let types = ''
      switch (apiRoute) {
        case 'characters':
          types = ACTION_TYPES.CHARACTERS
          break

        case 'character':
          types = ACTION_TYPES.CHARACTER
          break

        case 'creators':
          types = ACTION_TYPES.CREATORS
          break

        case 'creator':
          types = ACTION_TYPES.CREATOR
          break

        case 'comic':
          types = ACTION_TYPES.COMIC
          break

        case 'series':
          types = ACTION_TYPES.SERIES
          break

        case 'serie':
          types = ACTION_TYPES.SERIE
          break

        default:
          types = ACTION_TYPES.COMICS
          break
      }
      return types
    }

    try {
      dispatch({
        type: typeAction().GET_LOAD
      })

      const response = await axios.get(
        `${baseURL}${apiRoute}${parseParams(allParams)}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response) {
        throw new Error('Error')
      }

      dispatch({
        type: typeAction().GET_RES,
        payload: {
          code: response.data.code,
          status: response.data.status,
          // data: result,
          data: response.data.data
        }
      })
    } catch (err) {
      dispatch({
        type: typeAction().GET_ERR,
        error: err
      })
    }
  }

// export const fetchComments = comments => {
//   return {
//     type: JOBS,
//     comments: comments,
//   };
// };

// export const initComments = kids => async dispatch => {
//   try {
//     const promises = kids.map(kid =>
//       axios.get(`item/${kid}.json`).then(response => response.data),
//     );
//     const result = await Promise.all(promises);
//     dispatch(fetchComments(result));
//   } catch (err) {
//     dispatch(fetchDataFailed(err));
//   }
// };

// export const fetchPage = data => {
//   return {
//     type: ACTION_TYPES.JOBS.GET_RES,
//     data: data,
//   };
// };

export const onInitNextPage = (pageNum) => async (dispatch) => {
  try {
    dispatch({
      type: ACTION_TYPES.COMICS.GET_LOAD
    })
    const response = await axios.get(`${baseURL}showstories.json`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.data
    const collection = data
      .slice(0, parseInt(pageNum))
      .map((id) =>
        axios
          .get(`${baseURL}comics/${id}.json`)
          .then((response) => response.data)
      )
    const result = await Promise.all(collection)
    dispatch({
      type: ACTION_TYPES.COMICS.GET_RES,
      payload: {
        data: result
      }
    })
  } catch (err) {
    dispatch({
      type: ACTION_TYPES.COMICS.GET_ERR,
      error: err
    })
  }
}
