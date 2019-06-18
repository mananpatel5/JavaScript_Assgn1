//initialize express

const express = require('express');
const path = require('path');
const app = express();
var port = process.env.PORT || 3000;

//redirect

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/image'));

//Main Page
app.get('/', function(req, res){
    res.render('index');
});


app.get('/index', function(req, res){
    res.render('index');
});

//This will call about me pug page

app.get('/about', function(req, res){
    res.render('about');
});

//This will call projects pug page

app.get('/projects', function(req, res){
    res.render('projects');
});

//This will call Services pug page

app.get('/services', function(req, res){
    res.render('services');
});

//This will call contact pug page

app.get('/contact', function(req, res){
    res.render('contact');
});

app.listen(port, () => console.log('Server is running on port'+port));