const express =require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose")
const config = require('./config/database')
const activities = require('./routes/activities')
const app = express()
const port = 4000

mongoose.connect(config.database)
mongoose.connection.on('connected', ()=>{
  console.log('Connected to database '+ config.database)
});
mongoose.connection.on('error', (err)=>{
  console.log(err)
});

app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  res.send('Invalid endpoint')
})

app.use('/activities', activities)

app.listen(port, ()=>{
  console.log('Server started on port:',port)
})
