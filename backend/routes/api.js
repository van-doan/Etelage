const express = require('express');
const exhibitRouter = require('./exhibitRoutes');
const userRouter = require('./userRoutes');
const commentRouter = require('./commentRoutes');

const apiRouter = express.Router();

apiRouter.use('/exhibit', exhibitRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/comments', commentRouter);

module.exports = apiRouter;