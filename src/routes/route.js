const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const formatter = require('../validator/formatter.js')
//importing external package


router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    helper.radhe()
    helper.Krishna()
    logger.myfunction()
    formatter.trimu()
    formatter.chunki()
    formatter.tail()
    formatter.uniqe()
    formatter.mkobj()
    res.send('My first ever api!')
    
    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

