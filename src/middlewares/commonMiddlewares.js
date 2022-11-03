const { isValidObjectId } = require('mongoose')


const headerValidation= function(req,res,next){
    let header= req.headers["isfreeappuser"]
    if(header) next()
    else res.send({Error: "request is missing a mandatory header."})
    
}


const userValidation = function(req,res,next){
    let order = req.body
    let{userId}=order
   if(isValidObjectId(userId) && userId) next()
    else 
    res.send({Error: "this field is required." })
    
}

const productValidation = function(req,res,next){
let order = req.body
    let{productId}=order

    if(isValidObjectId(productId) && productId) next()
    else 
    res.send({Error: "this field is required." })
}


module.exports.userValidation= userValidation
module.exports.productValidation= productValidation
module.exports.headerValidation = headerValidation