const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserExhibit = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  artworkIds: [{
    type: Schema.Types.ObjectId,
  }],
  likes: {
    type: Number,
  }
  },{
    timestamps: true
});

module.exports = mongoose.model('UserExhibit', UserExhibit);