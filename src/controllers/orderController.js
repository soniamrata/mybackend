const OrderModel = require("../models/OrderModel.js")
const productModel =require("../models/productModel.js")
const UserModel = require("../models/userModel.js")

const createOrder= async function (req, res ){
    let index
    let amt
    let balnc
    let updates
    let order = req.body
    let{isFreeAppUser}=order
    if(!isFreeAppUser){
    let saveData = await OrderModel.create(order)
    let fetchData = await OrderModel.find().populate("userId").populate("productId")
    for(let i=0; i<fetchData.length; i++){
      index= fetchData[i]
      amt= index.amount
      balnc= index.userId.balance
      
    }
    if(balnc>amt){
        updates= balnc-amt
    let updateData = await UserModel.findOneAndUpdate({balance:balnc},
        {$set:{balance:updates}},
        {upsert:true,new:true})
        console.log(updateData)
        res.send({msg: updateData})
    }
    else
    res.send({Error: "user has insufficient balance"})
}
else{
    let orderData = await OrderModel.create(order)
    res.send(orderData)
}}

module.exports.createOrder= createOrder