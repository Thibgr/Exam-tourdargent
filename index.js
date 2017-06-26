//Varaiables

var express = require('express');
var ejs = require('ejs');
var app = express(),
    port = 1337;

//EJS 
app.set('view engine', 'ejs');

//Secure

app.use('/assets/css', express.static(__dirname + '/public/css'));
app.use('/assets/js', express.static(__dirname + '/public/js'));
app.use('/assets/images', express.static(__dirname + '/public/images'));
app.use('/assets/fonts', express.static(__dirname + '/public/fonts'));

//Redirections

app.get('/', function(req,res){
    console.log('REQ on /, with redirection ')
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/lechef', function(req,res){
    console.log('REQ on /lechef, with redirection ')
    res.sendFile(__dirname + '/views/lechef.html');
})

app.get('/heritage', function(req,res){
    console.log('REQ on /heritage, with redirection ')
    res.sendFile(__dirname + '/views/heritage.html');
})

app.get('/lacave', function(req,res){
    console.log('REQ on /heritage, with redirection ')
    res.sendFile(__dirname + '/views/lacave.html');
})

app.listen(port, function(){
    console.log('app listening on port ' + port)
});