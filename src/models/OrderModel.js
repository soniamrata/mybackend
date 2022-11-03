const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema( {
	
	userId:{
        type: ObjectId,
        ref:"Amuser"
    } ,
	productId:{
         type:ObjectId,
         ref:"product"
    },
	balance : Number,
	isFreeAppUser: Boolean, 
	date: String

}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema)