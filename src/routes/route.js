const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

 const bookmodel = require("../books/bookmodel.js")
const bookcontoller = require("../bookfunc/bookcontoller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/bookint" ,bookcontoller.author)

router.get("/booksget",bookcontoller.getbook)

module.exports = router;