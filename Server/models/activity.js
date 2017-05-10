const mongoose = require('mongoose');
const config = require('../config/database');

const ActivitySchema = mongoose.Schema({
  provname:{
    type: String
  },
  actname:{
    type:String
  },
  price:{
    type: String
  },
  category:{
    type: String
  },
  location:{
    type: String
  },
  url:{
    type: String
  },
  identifier:{
    type:String
  },
  details:{
    type:String
  }
})

const Activity = module.exports = mongoose.model('Activity',ActivitySchema);

module.exports.addActivity = (newActivity, callback)=>{
      newActivity.save(callback)
    }
