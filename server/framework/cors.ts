import cors from 'cors';
import env from 'server/config/env';

const corsMiddleware = cors(env.cors);

export default corsMiddleware;
