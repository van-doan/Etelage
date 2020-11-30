const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Auth0 Express OpenID Connection //
const { auth } = require('express-openid-connect');
app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});