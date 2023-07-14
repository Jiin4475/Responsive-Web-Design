
//방법1
//이함수를 호출하면 노드js에서 제공하는 유틸리티메서드 속성을 받음
const http = require('http');

//statusCode: 브라우저에 요철이 성공했는지 여부를 알리는 방법
//응답 준비가 완료되었다
function handleRequest(request, response){
    
    //url 실제 url 부분 가지고 있다
    //new Date().toISOString() 날짜의 객체를 호출해서 문자열로 변환
    //localhost:3000 current time
    //localhost:3000
    
    if(request.url === '/currentTime'){
    //해당 url로 전송된 경우 실행되어야 하는 코드
        response.statusCode = 200;
        response.end('<h1>' + new Date().toISOString() + '</h1>');
    }else if(request ==='/'){//'/' 도메인 뒤에 아무것도 없음
        response.statusCode = 200;
        response.end('<h1>Hello World!</h1>');
    }

};

//웹서버를 만듬
const server = http.createServer(handleRequest);

//포트번호에서 수신대기/ 일반적으로 기본(80)이 아닌 포트(3000) 로컬시스템에서 개발중인 것이 다른 서버와 충돌되지 않는지 확인-다 괜찮으면 80,433으로 교체
server.listen(3000);

//방법2
const  express = require('express');

const app = express();

// 방법1
app.get('/currenttime', function(req,res){
res.send('<h1>' + new Date().toISOString() + '</h1>');
});


app.get('/', function(req,res){
res.send('<h1>Hello World!</h1>');
});

app.listen(3000);


