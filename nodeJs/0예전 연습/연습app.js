//new Date()날짜객체를 생성하는 내장된 방법
//new Date().toDateString() 문자열 표현을 변환해서 읽을 수 있는 텍스트
const path = require('path');//최소한의 능력으로 모든 운영체제에서 작동하는 완전한 경로를 쉽게 구성
const fs = require('fs');//파일 시스템 즉시 수행함
const express = require('express');


const app = express();

//1.input 으로 받은 내용을 성공적으로 저장하게 도와줌
app.use(express.urlencoded({extended: false}));


app.get('/currenttime', function(req, res) {
     res.send('<h1>' + new Date().toISOString() +'</h1>');
 });

app.get('/', function(req, res){
     res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
});

 
 app.post('/store-user',function(req,res){
 const userName = req.body.username;
 
 
 //파일이 기록되어야 하는 파일 위치를 파일 시스템 패키지에 알려줌
 const filePath = path.join(__dirname, 'data', 'users.json');
//위치를 알았으면 파일 안에 무엇이 있는지 '읽기'
 const fileData = fs.readFileSync(filePath);


 //JSON 형태의 텍스트 파일 => 자바 스크립트의 형태의 객체또는 오브젝트 변환
 const existingUsers = JSON.parse(fileData);
 
 //새로 입력되는 유저이름을 넣는 작업
 existingUsers.push(userName);

 //입력된 값을 반환하기 위해 JSON(도우미 객체임).stringify(자바스크립트 값을 전달하는데 이것을 텍스트로 변환해줌)
 fs.writeFileSync(filePath, JSON.stringify(existingUsers));

 res.send('<h1>Username stored!</h1>');

 });


  //페이지 방문자가 로드된 페이지에서 사용자를 볼 수 있도록 users.json 저장된 모든 사용자를 출력
 
 app.get('/users', function(req, res){
    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);


    // for of 모든 기존 사용자를 살펴보고 사용자에대한 몰록을 만듬
    let responseData = '<ul>';

     for(const user of existingUsers){
      responseData +='<li>' + user + '</li>';
     }
      responseData += '</ul>'
      res.send(responseData);

 })
app.listen(3000);



