var express = require('express');
var router = express.Router();
var getJSON = require('get-json')


/* GET home page. */
getJSON('https://api.kawalcorona.com/positif', function(error, response){
    console.log(response);
})

module.exports = router;
