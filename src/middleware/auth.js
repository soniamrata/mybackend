const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel"); 

let authentication = async function(req,res,next){
let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

//If no token is present in the request header return error. This means the user is not logged in.
if (!token) return res.send({ status: false, msg: "token must be present" });

console.log(token);
 let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
 next();
 if (!decodedToken)
   return res.send({ status: false, msg: "token is invalid" });

  // Note: Try to see what happens if we change the secret while decoding the token
};



module.exports.authentication =authentication