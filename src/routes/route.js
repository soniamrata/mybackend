const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController.js")
const bookController= require("../controllers/bookControllr.js")
const publishController = require("../controllers/pubController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthordata", authorController.createAuthor)

router.post("/createPublish",publishController.publisCreate)

router.post("/createBooks", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)
// router.post("/createbookWithAuthorPub",bookController.requiredAuthorId)
 router.get("/getBooksWithAuthorDetails", bookController.fetchallbooks)
 
module.exports = router;