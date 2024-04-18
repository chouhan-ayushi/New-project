
let mongoose = require('mongoose');

let  messageSchema = new mongoose.Schema({ 
    name:{
        type: String,
        reuire: true
    },
    email:{
        type: String,
        reuire: true
    },
    subject:{
        type: String,
        reuire: true
    },
    message:{
        type: String,
        reuire: true
    }
})

let Message = mongoose.model('Message',messageSchema )

module.exports = Message
