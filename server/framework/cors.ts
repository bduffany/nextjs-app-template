import cors from 'cors';
import env from '../config/env';

const corsMiddleware = cors(env.cors);

export default corsMiddleware;
