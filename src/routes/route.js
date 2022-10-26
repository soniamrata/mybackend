const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.get("/bookList", BookController.list)
router.post("/booksIn", BookController.booksInYear)

router.post("/getParticularBooks",BookController.partiBooks)
router.get("/getXINRBooks",BookController.Indian)
router.get("/getRandomBooks",BookController.ranbook)

module.exports = router;