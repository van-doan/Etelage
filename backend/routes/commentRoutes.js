const express = require('express');
const mongoose = require('mongoose');
const Comment = require('../models/Comment');

const commentRouter = express.Router();

// @desc  Initialize Comments
// @method GET
commentRouter.get('/', (req, res) => {
  res.json({message: 'Comments initialized!'})
})

// @desc  C => Create Comment
// @method  POST
// @route   api/comment/
commentRouter.post('/', async (req, res) => {
  let comment = await Comment.create(req.body)
  res.json(comment)
  })

// @desc  R => Read Comment by Id
// @method GET
// @route   api/comment/:id
commentRouter.get('/:id', async (req, res) => {
  let comment = await Comment.findById(req.params.id, req.body)
  res.json(comment)
  });

// @desc  U => Update Comment by Id
// @method PUT
// @route   api/comment/:id
commentRouter.put('/:id', async (req, res) => {
  let comment = await Comment.findByIdAndUpdate(req.params.id, req.body)
  res.json(comment)
  })

// @desc D => Delete Comment
// @method DELETE
// @route   api/comment/:id
commentRouter.delete('/:id', async (req, res) => {
  await Comment.remove({_id: req.params.id})
  res.json({message: 'Comment has been deleted.'})
});
