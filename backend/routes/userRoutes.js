const express = require('express');
const mongoose = require('mongoose');
const UserExhibit = require('../models/UserExhibit')
const User = require('../models/User');


const userRouter = express.Router();


// @desc    R => Read Exhibits by UserId
// @method  GET
// @route   api/user/:id

userRouter.get('/:id/exhibit', async (req, res) => {
  await User.findOne({_id: req.params.id})
  .then(user=>{
    UserExhibit.find({user: req.params.id})
    .populate("user", "_id username")
    res.json({user, exhibit})
    })
  });

// @desc    R => Read User by Id
// @method  GET
// @route   api/user/:id
userRouter.get('/:id', async (req, res) => {
  let user = await User.findById(req.params.id)
    .populate("user")
  res.json(user)
  });

// userRouter.get('/:id/edit', async (req, res) => {
//   let user = await User.findById({ user: req.params.id})
//   res.json(user)
//   });

// @desc     U => Edit User by Id
// @method  PUT
// @route   api/user/:id/edit
userRouter.put('/:id', async (req, res) => {
  let user = await User.findByIdAndUpdate(req.params.id, 
    {$set:
      {username: req.body.user.username}
    }, {new: true}) 
  res.json(user)
})

// @desc    U => Update User When Following a User
// @method  PUT
// @route   api/user/:id
userRouter.put('/follow', async (req, res) => {
  let user = await User.findByIdAndUpdate(req.body.followId, {
    $push: {followers: req.user._id}
  },
  res.json(user));
})

// @desc    U => Update User When Unfollowing a User
// @method  PUT
// @route   api/user/:id
userRouter.put('/unfollow', async (req, res) => {
  let user = await User.findByIdAndUpdate(req.body.unfollowId, {
    $pull: {followers: req.user.id}  
  },
  res.json(user));
})


module.exports = userRouter;