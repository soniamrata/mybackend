const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const authenticate = function (req, res, next) {
  //check the token in request header
  //validate this token
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error
    if (!token)
     return res.status(400).send({ status: false, msg: "token must be present" });

    console.log(token);

    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    
    let decodedToken = jwt.verify(token, "functionup-thorium");
    next()
    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is not valid" })
  }
  catch (error) {
    res.status(500).send({ status: false, message: error.message })
  }
};



const authrised = function (req, res, next) {
  try {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present in the request header" })

    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is not valid" })

    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId
    next()

    //userId comparision to check if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn)
      return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
  }
  catch (error) {
    res.status(500).send({ status: false, massage: error.massage })
  }
}

module.exports.authenticate = authenticate
module.exports.authrised = authrised