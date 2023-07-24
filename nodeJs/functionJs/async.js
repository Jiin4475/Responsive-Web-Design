const fs = require('fs/promises');

//async 이 함수는 명시적으로 반환하지 않고 자동으로 프로미스 반환
async function readFile(){
    let fileData;

    // fileData = fs.readFileSync('data.txt');
    //  파일을 다 읽고, 끝날 때까지 기다리는 명령

     // fileData = fs.readFile('data.txt');
     // 파일을 읽기 시작


     //call back function(오류객체, 파일)
     //동시에 여러개의 잠재적으로 오래 걸리는 비동기 작업을 실행 => 시작
     //다른 코드 작업을 차단하지 않고, 하나 이상의 장기 작업을 실행하는것

        // fileData = fs.readFile('data.txt', function(error, fileData){
        // if (error){
            // ...
        //  }
        // console.log('File parsing done!');
        // console.log(fileData.toString());
        //start anothr async task that sends the data to a database
    // });

  try{
    fileData = await fs.readFile('data.txt');
  }catch(error){
    console.log(error)
  }

    // without Call back function  
    //fileData = await 새로 저장하고, 자동으로 해당 프로미스에 .then 을 추가하고  값을 반환
    // fileData = await fs.readFile('data.txt')
        
    console.log('File parsing done!');
    console.log(fileData.toString());
    //return anotherAsyncOperation;

    //  .then(function () {})// 성공사례를 처리하는 .then method
    //  //another method
    //  .catch(function(error){//이전 프로미스에서 오류를 처리하는 .catch
    //     console.log(error);// 발생한 에러를 해당 오류 객체를 가져오는 함수


     });

    console.log('hi there!');

  
}

readFile();

//scopimng?

