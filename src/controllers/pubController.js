const publisherModel = require("../models/publishermodel")

const publisCreate= async function (req, res) {
    let publish = req.body
    let publishCreated = await publisherModel.create(publish)
    res.send({Data:publishCreated})
}

module.exports.publisCreate=publisCreate