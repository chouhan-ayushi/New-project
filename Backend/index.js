const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/DepartmentProject',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB connection established');
}).catch(()=>{
    console.log('DB connection not established');
})

let messageRoutes = require('./routes/message')
let commentRoutes = require('./routes/comment')


app.use('/api', messageRoutes)
app.use('/api', commentRoutes)

app.listen(4000,()=>{
    console.log("server listening on port 4000");
})