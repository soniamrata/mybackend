const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'sabiha']
    res.send(students)
})
//*-------------------------------

// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;

//*----------------------------------------------ques 1--------------------------------------------------*//
// router.get('/movies', function (req, res){
    
//     let movies = ['gadar', 'ek villan', 'genius','comando2']
//     res.send(movies)
// })


//*-----------------------------------------------ques 2------------------------------------------------------*//
// router.get('/movies/:indexNumber', function (req, res){
// let movies = ['gadar', 'ek villan', 'genius','commando2','suryavanshi']
// res.send(movies[req.params.indexNumber])
// })


//*------------------------------------------ques 3--------------------------------------------------------*//


// router.get('/movies/:indexNumber', function (req, res) {
//     let mymovies = ['Chichore', 'Genius', 'Ms.Dhoni', "3 Idiots", "Heropanti"]
//     if (mymovies[req.params.indexNumber]) {
//         res.send(mymovies[req.params.indexNumber])
//     }
//     else {
//         res.send("Enter a valid index!!!!")
//     }
// })

//*-------------------------------------------ques4-------------------------------------------------------*//

// router.get('/films', function (req, res) {
//     let movies = [
//         { id: 1, name: "Chichore" },
//         { id: 2, name: "Genius" },
//         { id: 3, name: "Ms.Dhoni" },
//         { id: 4, name: "3 Idiots" }
//     ]
//     res.send(movies)

// })

//*----------------------------------------------ques 5----------------------------------------------------*//

router.get('/films/:filmsId', function (req, res) {
    let movies = [
        { id: 1, name: "Chichore" },
        { id: 2, name: "Genius" },
        { id: 3, name: "Ms.Dhoni" },
        { id: 4, name: "3 Idiots" }
    ]

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id == req.params.filmsId) {
            return res.send(movies[i])
        }

    }
   res.send("No movie present!")

})


