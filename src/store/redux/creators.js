import STATUS_TYPES from '../../constants/statusTypes';
import ACTION_TYPES from '../../constants/actionTypes';
import DEFAULT_STATES from '../../constants/defaultStates';

const defaultState = DEFAULT_STATES.CREATORS;

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATORS.GET_LOAD:
      return {
        ...state,
        status: STATUS_TYPES.LOADING,
        error: null,
      };

    case ACTION_TYPES.CREATORS.GET_RES:
      return {
        ...state,
        status: STATUS_TYPES.SUCCESS,
        error: null,
        data: action.payload.data,
        // filters: action.payload.filters,
        // pagination: action.payload.pagination,
      };

    case ACTION_TYPES.CREATORS.GET_ERR:
      return {
        ...state,
        status: STATUS_TYPES.ERROR,
        error: action.error,
      };

    default:
      return state;
  }
}

export default reducer;
