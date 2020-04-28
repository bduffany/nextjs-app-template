import dev from './env.development';

const ENV = {
  ...dev,
  cors: {
    // TODO [i]: Configure CORS origins for production.
    origin: [],
  },
};

export default ENV;
