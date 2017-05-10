const express = require('express')
const router = express.Router()
const ACTIVITY = require('../models/activity')
const COMMENT = require('../models/comment')
const config = require('../config/database')

var act1_fav= false
var act2_fav= false
var act3_fav= false
var act4_fav= false
var act5_fav= false

//  var comment = {
//   comm="",
//   user=""
// }

router.post('/addActivity', (req, res, next)=>{
var newActivity = new ACTIVITY({
  provname : req.body.provName,
  actname : req.body.actName,
  price : req.body.price,
  category : req.body.category,
  location : req.body.location,
  url:req.body.url,
  identifier: req.body.identifier,
  details: req.body.details
  })


  ACTIVITY.addActivity(newActivity, (err, registered)=>{
    if(err){
      res.json({success: false, msg:'Failed to register new event',err:err})
    } else
      res.json({success: true, msg:'Event registered!', registered:registered})
    })
  })


router.get('/getAll',(req, res, next) => {
  ACTIVITY.find({},(err, activities)=> {
    if(activities.length===0){
      return res.send({msg:'Activity list is empty'})
    } else {
        res.json(activities)
    }
  })
})


router.post('/getByParam',(req,res,next) =>{
  var param = req.body.param
  console.log(param)
  ACTIVITY.find({ identifier:param },(err, details)=>{
      //console.log(callback);
      res.json(details)
  })
})

router.post('/markFav',(req,res,next) =>{
  var identifier = req.body.identifier
  console.log(identifier);
  switch(identifier) {
    case "activity_1":{
        act1_fav=!act1_fav
        res.send(act1_fav)
        break;
      }
    case "activity_2":{
      act2_fav=!act2_fav
      res.send(act2_fav)
        break;
      }
    case "activity_3":{
      act3_fav=!act3_fav
      res.send(act3_fav)
      break;
      }
      case "activity_4":{
        act4_fav=!act4_fav
        res.send(act4_fav)
        break;
      }
      case "activity_5":{
        act5_fav=!act5_fav
        res.send(act5_fav)
        break;
      }
    default:{
        res.send('not found')
        break;
      }
}
  })

  router.post('/checkFav',(req, res, next) => {
    var identifier = req.body.identifier
    switch(identifier) {
      case "activity_1":{
          res.send(act1_fav)
        }
          break;
      case "activity_2":{
        res.send(act2_fav)
        }
          break;
      case "activity_3":{
        res.send(act3_fav)
      }
      case "activity_4":{
        res.send(act4_fav)
      }
         break;
      case "activity_5":{
       res.send(act5_fav)
     }
        break;
      default:
          res.send('not found')
  }
  })

    // var comments = new Array()
    // comments.push({comm:"It was great!",user:"Jack Sparrow"})
    // comments.push({comm:"The food was bad!",user:"John doe"})
    // comments.push({comm:"I was late!",user:"Procra Stinator"})
  router.post('/getComments',(req, res, next)=>{
    var identifier = req.body.identifier
    COMMENT.find({ 'identifier':identifier },(err, comments)=>{
        console.log(comments);
          res.send(comments)
  })
})


  router.post('/addComment', (req, res, next)=>{
  var newCom = new COMMENT({
    identifier: req.body.identifier,
    username : req.body.username,
    useremail : req.body.useremail,
    comment: req.body.comment
    })
    COMMENT.addComment(newCom, (err, registered)=>{
      if(err){
        res.json({success: false, msg:'Failed to register new event',err:err})
      } else
        res.json({success: true, msg:'Thank you for your comment!'})
      })
    })

module.exports = router
