const path = require('path');
const express = require('requier');
const fs = require('fs');


const app = express();


app.use(express.urlencoded({exteded: false}))

app.get('/', function(req, res) {
   res.send('<h1>Who I am?</h1>');

});

app.get('/currenttime', function(req, res){
   res.send('<h1>'+new Date().toISOString()+ '</h1>');
});

app.get('/', function(req, res){
   res.send('<form><label><input type="text" name="username"><button>Submit</button></label></from>');
})

app.post('/store-user', function(req, res){
   const userName = req.body.username;
   
   const filePath = path.join(__dirname, 'data', 'users.json');
   const fileData = fs.readFileSync('filePth');


   const exisitingUsers = JSON.parse(fileData);

   exisitingUsers.push(userName);
   fs.writeFileSync(filePath, JSON.stringify(exisitingUsers));

   res. send('<h1> user stored!</h1>')
})


//페이지 방문자가 로드된 페이지에서 사용자를 볼 수 있도록 users.json 저장된 모든 사용자를 출력
app.get('/users', function(req, res){
   
   const filePath = path.join(__dirname, 'data', 'users.json');

   const fileData = fs.readFileSync('filePth');
   const exisitingUsers = JSON.parse(fileData);

   let responseData = '<ul>';

   for (user of exisitingUsers){
      responseData =+ '<li>'+ user+ '</li>'
   }
    responseData =+'/ul';
    res.send(responseData);

})


app.lisetn(3000);

