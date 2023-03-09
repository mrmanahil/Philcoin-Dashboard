const config = {
  production: {
    meEndpoint: "http://localhost:5000/api/v1/not-available",
    loginEndpoint: "/jwt/login",
    registerEndpoint: "/jwt/register",
    storageTokenKeyName: "accessToken",
    refreshTokenKeyName: "refreshToken",
  },
  development: {
    meEndpoint: "http://localhost:5000/api/v1/not-available",
    loginEndpoint: "/jwt/login",
    registerEndpoint: "/jwt/register",
    storageTokenKeyName: "accessToken",
    refreshTokenKeyName: "refreshToken",
    base_URL: "http://172.22.128.1:3000/api/v1",
  },
};

export default config[process.env.REACT_APP_ENVIRONMENT];
