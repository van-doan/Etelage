const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  exhibitId: {
    type: Schema.Types.ObjectId,
    ref: 'Exhibit',
  },
  likes: {
    type: Number,
    default: 0,
  },
  },{
    timestamps: true
  });

module.exports = mongoose.model('Comment', CommentSchema);