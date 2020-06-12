import * as email from '@sendgrid/mail';
import env from 'server/config/env';

email.setApiKey(env.sendgrid.apiKey);

export default email;
