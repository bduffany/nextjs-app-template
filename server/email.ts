import * as email from '@sendgrid/mail';
import env from './config/env';

email.setApiKey(env.sendgrid.apiKey);

export default email;
