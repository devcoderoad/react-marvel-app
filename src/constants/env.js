const ENV = process.env.NODE_ENV;

const ENV_TYPES = {
  LOCAL: 'local',
  DEV: 'dev',
  SANITY: 'sanity',
  PRODUCTION: 'production',
};

const API_TYPES = {
  LOCAL: 'https://gateway.marvel.com/v1/public/',
  DEV: 'https://gateway.marvel.com/v1/public/',
  STAGING: 'https://gateway.marvel.com/v1/public/',
  PRODUCTION: 'https://gateway.marvel.com/v1/public/',
};

export default {
  ENV_TYPES,
  API_TYPES,
  ENV,
};
