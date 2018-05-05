var express = require('express');
var router = express.Router();

router.get('/', function(req,res, next){
    // res.setHeader('Content-Type', 'text/html');
    res.render('index',{ title: 'Express' })
})

router.get('/detail', function(req,res){
    res.render('detail')
})

module.exports = router;
