const PRODUCTION_ENV = {
  cors: {
    origin: [/^http:\/\/localhost:/],
  },
  sendgrid: {
    // TODO [i]: Configure Sendgrid API access
    apiKey: 'TODO',
    verifiedSenderDomain: 'TODO.com',
    verifiedSenderName: 'TODO from TODO.com',
  },
  firebase: {
    // TODO [w]: Configure Firebase service account
    project_id: 'TODO',
    private_key: 'TODO',
    client_email: 'TODO',
    database_url: 'TODO',
  },
};

export default PRODUCTION_ENV;
