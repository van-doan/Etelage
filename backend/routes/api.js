const express = require('express');
const exhibitRouter = require('./exhibitRoutes');
const userRouter = require('./userRoutes');
const commentRouter = require('./commentRoutes');

const apiRouter = express.Router();

apiRouter.route('/exhibit', exhibitRouter);
apiRouter.route('/user', userRouter);
apiRouter.route('/comments', commentRouter);

module.exports = apiRouter;