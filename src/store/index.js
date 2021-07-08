import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

/* reducer */
import rootReducer from './redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, bindMiddleware([thunk]));
  return store;
}

export default configureStore;
