const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    image :{
        type:String
    },
    caption :{
        type:String
    },
    likes :{
        type:Number
    },
    created :{
        type:Date,
        default:Date.now
    }
})
const postModel = mongoose.model("post",postSchema);
module.exports = postModel;