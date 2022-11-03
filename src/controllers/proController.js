const ProductModel = require('../models/productModel.js')


const createProduct = async function (req, res ){
    let product = req.body
    let productInfo = await ProductModel.create(product)
    res.send({msg: productInfo})}






module.exports.createProduct= createProduct

