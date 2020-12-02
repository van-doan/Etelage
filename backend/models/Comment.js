const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  exhibitId: {
    type: Schema.Types.ObjectId,
    ref: 'Exhibit',
  },
  responseTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    required: true,
  },
  },{
    timestamps: true
  });

module.exports = Comment;