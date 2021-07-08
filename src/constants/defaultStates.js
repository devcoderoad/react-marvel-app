/** Store's default state */
import STATUS_TYPES from './statusTypes';

const CHARACTER = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
};
const CHARACTERS = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
  filters: [],
  pagination: {},
};
const COMIC = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
};
const COMICS = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
  filters: [],
  pagination: {},
};
const CREATOR = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
};
const CREATORS = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
  filters: [],
  pagination: {},
};
const EVENT = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
};
const EVENTS = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
  filters: [],
  pagination: {},
};
const SERIE = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
};
const SERIES = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
  filters: [],
  pagination: {},
};

export default {
  CHARACTER,
  CHARACTERS,
  COMIC,
  COMICS,
  CREATOR,
  CREATORS,
  EVENT,
  EVENTS,
  SERIE,
  SERIES
};
