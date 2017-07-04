//Varaiables

var express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql');

var app = express(),
    port = 1337;

var connection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'tourdargent',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    });
}

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

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
    console.log('REQ on /lacave, with redirection ')
    res.sendFile(__dirname + '/views/lacave.html');
})

app.get('/carte', function(req,res){
    console.log('REQ on /carte, with redirection ')
    res.sendFile(__dirname + '/views/carte.html');
})

app.get('/reservation', function(req,res){
    console.log('REQ on /reservation, with redirection ')
    res.sendFile(__dirname + '/views/reservation.html');
})

app.get('/invitation', function(req,res){
    console.log('REQ on /invitation, with redirection ')
    res.sendFile(__dirname + '/views/invitation.html');
})

app.get('/salonprive', function(req,res){
    console.log('REQ on /salonprive, with redirection ')
    res.sendFile(__dirname + '/views/salonprive.html');
})

app.get('/contact', function(req,res){
    console.log('REQ on /contact, with redirection ')
    res.sendFile(__dirname + '/views/contact.html');
})

app.get('/boulanger', function(req,res){
    console.log('REQ on /boulanger, with redirection ')
    res.sendFile(__dirname + '/views/boulanger.html');
})

app.get('/tokyo', function(req,res){
    console.log('REQ on /tokyo, with redirection ')
    res.sendFile(__dirname + '/views/tokyo.html');
})

app.get('/rotisserie', function(req,res){
    console.log('REQ on /rotisserie, with redirection ')
    res.sendFile(__dirname + '/views/rotisserie.html');
})

app.get('/comptoir', function(req,res){
    console.log('REQ on /comptoir, with redirection ')
    res.sendFile(__dirname + '/views/comptoir.html');
})

app.listen(port, function(){
    console.log('app listening on port ' + port)
});


//POST BOOKINGS
app.post('/reservation', function (req, res) {
    var q = "INSERT INTO reservation (day, people, number, hour) VALUES ('" + req.body.day + "', '" + req.body.people + "', '" + req.body.number + "', '" + req.body.hour + "');"
    var co = connection();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);

        res.sendFile(__dirname + '/views/reservation.html');
    });
    co.end();
});