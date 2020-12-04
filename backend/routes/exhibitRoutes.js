const express = require('express');
const mongoose = require('mongoose');
const UserExhibit = require('../models/UserExhibit')

const exhibitRouter = express.Router();

// @desc     Initialize Exhibit
// @method   GET
// @route    api/exhibit/
exhibitRouter.get('/', (req, res) => {
  res.json({message: 'Exhibit reached!'})
})

// @desc    C => Create Exhibit
// @method  POST
// @route   api/exhibit/
exhibitRouter.post('/', async (req, res) => {
  let exhibit = await UserExhibit.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user._id,
    artworkIds: req.body.artworkIds,
  })
    res.json(exhibit);
});

// @desc    R => Read Featured Exhibits by Descending Likes
// @method  GET 
// @route   api/exhibit/featured
exhibitRouter.get('/featured', async (req, res) => {
  let sortedExhibitsByLikes = await UserExhibit.find({})
    .limit(1)
    .sort({'likes':-1})
    res.json(sortedExhibitsByLikes);
  })

// @desc    R => Read All User Exhibits
// @method  GET 
// @route   api/exhibit/userId
exhibitRouter.get('/:userId', async (req, res) => {
  let exhibit = await UserExhibit.find({ user: req.params.userId}) 
      res.json(exhibit);
  })

// @desc    U => Update User Exhibits
// @method  PUT 
// @route   api/exhibit/id
exhibitRouter.put('/:id/edit', async (req, res) => {
  let exhibit = await UserExhibit.findByIdAndUpdate(req.params.id, req.body)
  res.json(exhibit)
})  

// @desc    D => Delete User Exhibits
// @method  DELETE
// @route   api/exhibit/id
exhibitRouter.delete('/:id', async (req, res) => {
  await UserExhibit.remove({_id: req.params.id})
  res.json({message: 'Exhibit has been deleted.'})
} )

module.exports = exhibitRouter;