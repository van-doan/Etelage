/////////////////////////
// SERVER DEPENDENCIES //
/////////////////////////
const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const index = require('./routes/index');
// const session = require('express-session');

require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 8000;

app.use('/api/v1/index', index);

////////////////////////
// CONNECT TO MONGODB //
////////////////////////
const connectDB = require ('./config/db')

/////////////////////////
// MORGAN LOGS FOR DEV //
/////////////////////////
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
/////////////////////
// MIDDLEWARE INIT //
/////////////////////
app.use(cors({
  origin: '*'
}));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/////////////////////////
// CONNECT TO DATABASE //
/////////////////////////
connectDB();

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
  
  app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged In' : 'Logged Out');
  });
  
  app.get('/home', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user))
  })
  
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  });


  ///////////////////////////////////
  // EXPRESS SESSION CONFIGURATION //
  ///////////////////////////////////
  // ** Because sessions are created from the front-end, 
  // ** we may not need to use express sessions for this.
  
  // const sess = {
  //   secret: 'influxquantumfluxconflux',
  //   cookie: {},
  //   resave: false,
  //   saveUninitialized: true
  // };
  
  // if (app.get('env') === 'production') {
  //   // Use secure cookies in production (requires SSL/TLS)
  //   sess.cookie.secure = true;
  // }
  
  // app.use(session(sess));