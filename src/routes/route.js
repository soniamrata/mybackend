const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end

router.get("/users/:userId",middleware.authentication,userController.getUserData)

router.put("/users/:userId",userController.updateUser)
router.delete("/isDelete/:userId",userController.deleteData)
module.exports = router;