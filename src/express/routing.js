var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('request to get home');
    res.send('Hello Get!');
});

app.post('/', function(req, res){
    console.log('post home');
    res.send('Hello Post!');
});

app.delete('/del_user', function(req, res){
    console.log('delete user');
    res.send('Hello Delete!');
})

app.get('/list_usr', function(req, res){
    console.log('list user');
    res.send('Monte de user');
});

app.get('/ab*cd', function(req, res){
    console.log('patter');
    res.send('chamou a pagina');
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('listing http://%s:%s', host, port);
});