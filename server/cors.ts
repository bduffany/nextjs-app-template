import cors from 'cors';
import env from './config/env';

export default cors(env.cors);
