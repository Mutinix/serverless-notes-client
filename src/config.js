const config = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'cadmus-app-assets',
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://ytmr8cj4h3.execute-api.us-east-2.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_Imff0z1IK',
    APP_CLIENT_ID: '5o6slgkhqtg8s72ps8kj056nn6',
    IDENTITY_POOL_ID: 'us-east-2:53ea467e-acf9-41ca-9264-08488f39abf8',
  },
};

export default config;
