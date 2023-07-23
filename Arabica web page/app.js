const express = require('express');
const app = express();
const path = require('path');


app.get('/about',function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','about');
    res.sendFile(htmlFilePath);
})

app.get('/beans',function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','beans');
    res.sendFile(htmlFilePath);
})

app.get('/careers',function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','careers');
    res.sendFile(htmlFilePath);
})

app.get('/careers-form',function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','careers-form');
    res.sendFile(htmlFilePath);
})

app.get('/index',function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','index');
    res.sendFile(htmlFilePath);
})

app.get('/stores',function(req, res){
    const htmlFilePath = path.join(__dirname, 'views','stores');
    res.sendFile(htmlFilePath);
})





app.listen(3000);