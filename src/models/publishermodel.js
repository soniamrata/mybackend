const mongoose = require('mongoose');

const publisherSchema = mongoose.Schema( { 

publisher_id: String,
name: String,
headQuarter: String

}, { timestamps: true });


module.exports = mongoose.model('NewPublisher', publisherSchema)

