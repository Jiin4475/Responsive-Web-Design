const fs = require('fs');
const path = require('path');// 최소한의 능력으로 모든 운영체제에서 작동하는 완전한 경로를  쉽게 구성

const  express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));// 들어오는 요청을 처리함

// 방법1
app.get('/currenttime', function(req,res){
res.send('<h1>' + new Date().toISOString() + '</h1>');
});


app.get('/', function(req,res){
    res.send('<form action="/store-user" method="POST"><label>Your Name: </label><input type="text" name="username"><button>Submit</button></form>');
});

app.post('/store-user', function(req,res){
const userName = req.body.username;

//파일이 기록되어야하는 파일 위치를 파일 시스템 패키지에 알려줌
//__dirname:절대경로를 실제로 보유하는 내장된 변수 또는 상수
const filePath = path.join(__dirname, 'data','users.json');

const fileData = fs.readFileSync(filePath);
const existingUsers = JSON.parse(fileData);

existingUsers.push(userName);

fs.writeFileSync(filePath, JSON.stringify(existingUsers));

res.send('<h1>Username stored!</h1>');
});

app.get('/users', function(req, res){
   const filePath = path.join(__dirname, 'data','users.json');

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    let responseData = '<ul>';

    for (const user of existingUsers){
        responseData += '<li>' + user + '</li>';
    }

    responseData += '</ul>';

    res.send(responseData);
});

app.listen(3000)


