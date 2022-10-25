const bookModel= require("../books/bookmodel")  //bookmodel module is stored in bookModel variable

 const createbook = async function(req,res){
    let bookdata = req.body                      //to store body that given in postman(frontend)
    let savedData= await bookModel.create(bookdata)
    res.send({msg: "data created successfully",detail:savedData})
 
}

const getbook= async function (req, res) {
    let allbooksdata = await bookModel.find() //to find that author's every book
    res.send({msg: "fetch data successfully",allbooksdata})
}


module.exports.author = createbook
module.exports.getbook = getbook