/////////////////////////
// SERVER DEPENDENCIES //
/////////////////////////
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const apiRouter = require('./routes/api');
const PORT = process.env.PORT || 8000;
// const session = require('express-session');

require('dotenv').config()

let app = express();
/////////////////////
// MIDDLEWARE INIT //
/////////////////////

app.use(cors({
  origin: '*'
}));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
////////////////////////
// CONNECT TO MONGODB //
////////////////////////
const connectDB = require ('./config/db')

/////////////////////////
// CONNECT TO DATABASE //
/////////////////////////
connectDB();

app.use('/api', apiRouter);

/////////////////////////
// MORGAN LOGS FOR DEV //
/////////////////////////
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

/////////////////////////////////////
// AUTH0 EXPRESS OPENID CONNECTION //
/////////////////////////////////////
const { auth, requiresAuth } = require('express-openid-connect');
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
  );
  
////////////////
// API ROUTES //
////////////////
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged In' : 'Logged Out');
});

app.get('/home', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user))
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});