const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

const userRouter = express.Router();

// @desc  R => Read Comment by Id
// @method GET
// @route   api/user/:id
userRouter.get('/:id', async (req, res) => {
  let user = await User.findById({ user: req.params.id})
  res.json(user)
  });

// @desc  U => Update Comment by Id
// @method PUT
// @route   api/user/:id
userRouter.put('/:id', async (req, res) => {
  let user = await User.findByIdAndUpdate(req.params.id, req.body)
  res.json(user)
  })