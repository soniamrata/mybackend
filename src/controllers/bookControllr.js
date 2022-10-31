const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.authorId){
        return res.send("author Id is required")
    }
    if(!book.publisherId){
        return res.send("publisher Id is required")
    }

 let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const fetchallbook =async function (req,res){
    let allbooks =await bookModel.find().populate(["authorId","publisherId"])
    res.send({data:allbooks})
}

//a





module.exports.createBook= createBook
module.exports.fetchallbooks=fetchallbook
