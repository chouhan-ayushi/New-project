let mongoose = require('mongoose');

let  commentSchema = new mongoose.Schema({ 
    name:{
        type: String,
        reuire: true
    },
    email:{
        type: String,
        reuire: true
    },
    comment:{
        type: String,
        reuire: true
    }
})

let Comment = mongoose.model('Comment',commentSchema )

module.exports = Comment
