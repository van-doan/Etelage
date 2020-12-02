const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.Schema({
  username: {
    type: String,
    ref: 'User',
    required: true,
  },
  exhibits: [{
    type: Schema.Types.ObjectId,
    ref: 'Exhibit',
  }],
  comments: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  },
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
  },{
    timestamps: true
  });

  module.exports = mongoose.model('User', User);