// bookName, authorName, category and year
const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    bookName: String,
    
    author: {
        firstName: String,
        lastName: String,
    },
    category: String,

    publishedYear:String,

},{ timestamps: true });  //to store logintime and updation time

  module.exports = mongoose.model('Book', bookSchema)  //books