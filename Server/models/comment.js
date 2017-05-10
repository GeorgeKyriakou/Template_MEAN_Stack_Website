const mongoose = require('mongoose');
const config = require('../config/database');

const CommentSchema = mongoose.Schema({
  username:{
    type: String
  },
  useremail:{
    type: String
  },
  comment:{
    type: String
  },
  identifier:{
    type:String
  }
})

const Comment = module.exports = mongoose.model('Comment',CommentSchema);

module.exports.addComment = (newComment, callback)=>{
      newComment.save(callback)
    }
