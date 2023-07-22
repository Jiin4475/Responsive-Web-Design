const express = require('express');

const path = require('path');
const app = express();

//middle ware? 미들웨어 => 제공하려는 정적파일( css, js)를 저장하기위한 폴더 이름
app.use(express.static('public'));

app.get('/', function(req,res){
res.send('<h1>Hello World!!</h1>');
});

app.get('/restaurants', function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','restaurants.html')
    res.sendFile(htmlFilePath);
});
app.get('/recommend', function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','recommend.html')
    res.sendFile(htmlFilePath);
});
app.get('/index', function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','index.html')
    res.sendFile(htmlFilePath);
});
app.get('/confirm', function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','confirm.html')
    res.sendFile(htmlFilePath);
});
app.get('/about', function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','about.html')
    res.sendFile(htmlFilePath);
});

app.listen(3000);

