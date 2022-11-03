const express = require('express');
const router = express.Router();
const userController =require("../controllers/userController.js")
// const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const proController = require("../controllers/proController.js")
const orderController = require("../controllers/orderController.js")





router.post("/createuser",commonMW.headerValidation ,userController.createUser)
router.post("/createproducts",proController.createProduct)
router.post("/createOrders",commonMW.headerValidation,commonMW.userValidation,commonMW.productValidation,orderController.createOrder)
module.exports = router;