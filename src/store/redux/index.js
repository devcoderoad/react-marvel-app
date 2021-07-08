import { combineReducers } from 'redux';

/** Data state */
import storeComic from './comic';
import storeComics from './comics';
import storeCharacters from './characters';
import storeCharacter from './character';
import storeCreators from './creators';
import storeCreator from './creator';
import storeEvents from './events';
import storeEvent from './event';
import storeSeries from './series';
import storeSerie from './serie';

const rootReducer = combineReducers({
  storeComic,
  storeComics,
  storeCharacter,
  storeCharacters,
  storeCreators,
  storeCreator,
  storeEvents,
  storeEvent,
  storeSeries,
  storeSerie
});

export default rootReducer;
