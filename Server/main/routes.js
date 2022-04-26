var express = require('express')

// the router allows us to make each HTTP request
var router = express.Router()

// set up the first HTTP request
// req is request, res is response
router.get('/hello', function (req, res) {
    // convert the server response to json string "HW"
    res.json('hello world')
})

module.exports = router