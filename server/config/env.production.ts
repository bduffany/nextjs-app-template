import dev from './env.development';

const PRODUCTION_ENV = {
  ...dev,
  cors: {
    // TODO [i]: Configure CORS origins for production.
    origin: [],
  },
};

export default PRODUCTION_ENV;
