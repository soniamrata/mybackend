//const { count } = require("console")
const userModel = require("../models/userModel.js")

const createUser = async function (req, res) {
    let data= req.body
    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}

module.exports.createUser = createUser
















module.exports.createUser = createUser