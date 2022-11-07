const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try{
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.status(201).send({status:true, msg: savedData });
  }
  catch(error){
    xyz.status(500).send({status :false,message:error.message})
  }
};
//*******************************************************login user + jwt token********************************************************************** */
const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
  }
  catch(error){
    res.status(500).send({status:false,message:error.massage})
  }
  };
  //*********************************************************get user data************************************************* */
  
const getUserData = async function (req, res) {
  try {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
 
  }

catch(error){
  res.status(500).send({status:false, massage:error.massage })
}
};
//**********************************************updateUser************************************************************* */
const updateUser = async function (req, res) {
  try{
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
}
catch(error){
  res.status(500).send({msg: "error"})
}
};
//**************************************************post messae************************************************************** */

const postMessage = async function (req, res) {
  try{
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(404).send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.status(200).send({status: true, data: updatedUser})
  }
  catch{
    res.status(500).send({msg: "user is not autherised for this "})
  }
};

let deleteData = async function (req,res){
  try{
  let userId = req.params.userId
  let abc = await userModel.findOneAndUpdate({_id: userId, isDeleted: false},{$set:{isDeleted:true}})
  
  if(!abc){return res.status(404).send({status: false, msg:"User doesn't exist! OR already deleted."})}
  
  return res.status(200).send({status:true, msg:'Deleted Successfully'})
  }
  catch(error){
    res.status(500).send({msg :"not deleted"})
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteData=deleteData
