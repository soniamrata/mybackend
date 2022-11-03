const mongoose =require('mongoose')

    const userSchema = new mongoose.Schema( {
    name: String,
	balance : {
         type:Number,
         Default:100
	} ,                     
	address: String,
    Age :Number,
 	gender : {
		type:String,
		enum:["male","female","other"]
	} ,                                
	isfreeappuser: {
        type: Boolean,
		default: false
	}                                          


}, { timestamps: true });

module.exports = mongoose.model('Amuser', userSchema)