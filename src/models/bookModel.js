const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const bookSchema = new mongoose.Schema( {
    name: String,
    authorId: {
        type: ObjectId,
        ref: "newAouthor"
    }, 
    price: Number,
    ratings: Number,
    publisherId:{
        type:ObjectId,
        ref:"NewPublisher"
    }
    

}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)

