const express = require('express');
const router = express.Router();
const db = require('../models');

// @desc Featured Exhibits by Likes
// @method GET 
router.get('/exhibit/featured', async (req, res) => {
  let sortedExhibitsByLikes = await db.UserExhibit.find({})
    .limit(1)
    .sort({'likes':-1})
    res.json(sortedExhibitsByLikes);
  })

// @desc All User Exhibits
// @method GET 
router.get('/exhibit/:userId', async (req, res) => {
  let userExhibits = await db.UserExhibit.find({ user: req.params.userId}) 
      console.log(exhibits)
      res.json(userExhibits);
  })


