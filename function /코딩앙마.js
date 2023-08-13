//생성자 함수
function User (name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}

let user5 = new User('Han', 40);
user5.sayName();


//객체로 바꾸기
let n = 'name';
let a = 'age';

const user = {//객체 
    [n] : 'Mike',
    [a] : 3030
};

console.log(user)


function makeObj(key, val) {
    return {
        [key] : val,
    }
}

const  obj = makeObj('이름', 28);
console.log(obj);


//객체 메소드

//const user2 = Object.assign({}, user);// 유저의 새로운 값을 부여 할  때 
// user2.name = 'Jiin';
// const result = Object.keys(user);// 새로 부여하는 유저의 keys 만 필요 할 때
// const result = Object.values(user);//새로 부여하는 유저의 values 만 필요 할 때
// const result = Object.entries(user);//새로 부여하는 유저의 values, keys  필요 할 때

// const result = Object.entries(user);
// console.log(result);
//formentries 배열을 객체로 만드는 방법
let arr = [
['mon', '월'],
['tue', '화'],
];

const result = Object.fromEntries(arr);
console.log(result);

//Numebr , Math

//Math.ceil() 소수점 올림
// let num1 = 5.1;
// let num2 = 5.7;

// Math.ceil(num1);// => 6
// Math.ceil(num1);// => 6

//Math.floor() 소수점 내림
// let num1 = 5.1;
// let num2 = 5.7;

// Math.floor(num1);// => 5
// Math.floor(num2);// => 5


//Math.round() 소수점 반올림
// let num1 = 5.1;
// let num2 = 5.7;

// Math.round(num1);// => 5
// Math.round(num2);// => 6

//소숫점 자릿수
// let userRate = 30.1234;

//요구사항: 소수점 둘째자 리까지 표현(셋째 자리에서 반올림
//  Math.round(userRate * 100) / 100 //=> 30.12

//  //==> 더 간결한 방법  toFixed 문자이기 때문에 바꿔줘야 함

//  let userRate = 30.1234;
//  userRate.toFixed(2)// 소수점 두번째 자리

// isNaN()
let x = Number('x');

x ==NaN // false
x === NaN //false
NaN == NaN //false

isNaN(x)// true
isNaN(6)//false

//parseInt()
let margin = '10px';

parseInt(margin);// 10
Number(margin)//Nan


let redColor = 'f3';
parseInt(redColor) // Nan=> 숫자로 시작하지 x

parseInt(redColor, 16); // 243 => 16진수 넣어서
parseInt(11, '2'); // 3 => 2진수

//parseFloat() => 소수점이하는 무시하고 정수만 보냄 30.45% => 30
let padding = '18.5%';
parseInt(padding); //18
parseFloat(padding) // 18.5

///Math.randdom
//1~ 100까지 임의 의 숫자를 뽑고 싶다면?
Math.floor(Math.random() * 100) + 1; // 1을 더해주는 이유는 소수점을 버렸을 때 0.000이 나올 수 있기 때문에

//Math.max(), Math.min() 가장 큰 수랑 가장 작은 수를 구하는 것
Math.max(1,2,-3, 20);// => 20
Math.min(1,2,-3, 20);// => -3

//Math.abs(); 절대값 구하기
Math.abs(-1)// 1

//Math.pow(n, m) 제곱값 => 2 를 10번 곱한 값
Math.pow(2, 10)// 1024

//Math.sqrt() 제곱근
Math.sqrt(16)// 4


//문자열


//1. indexOf() 문자를 인수로 받아서 몇번째에 위치하는지 알려줌

let desc = 'hi guys. Nice to meet you.';

desc.indexOf('to'); //=> 14
desc.indexOf('man'); // 만약 찾는 문자가 없으면 -1 반환


//메세지를 볼 수 없음 hi_0번째 이기 때문에 0 => false 그래서 비교문 > -1 넣어줘야함
if(  desc.indexOf('hi') > -1 ){ 
    console.log('Hi가 포한된 문장입니다')
}

//2. slice(n, m)=> 특정범위열의 문자만 뽑기 n부터 m 까지의 문자열 반환
// n 은 시작점 , 없으면 문자열끝까지( ), 양수이면  그숫자까지, 음수이면 끝에서부터 셈
 let desc1 = 'abcdef';
 desc1.slice(2)// cdefg
 desc1.slice(0,5) //abcde
 desc1.slice(2, -2)// cde

 //3. substring (n, m) => n부터 m까지이지만 반대로 순서를 둬도 결과는 같음(음수는 0임)
 let desc2 = 'abcdef';

 desc2.substring(2, 5)//cde(2~4자리)
 desc2.substring(5, 2)//cde

 //4.substr(n, m) n은 시작점 m은 갯수
 let desc3 = 'abcdef';

 desc3.substr(2, 4);//cdef
 desc3.substr(-4, 4);//cdef

 //5. trim() 앞뒤 공백 제거
let trim = 'coding      ';
trim.trim();//'coding';

//6. repeat(n) n번 반복
let hello = 'hello!';
hello.repeat(3); //'hello!hello!hello!'

//실용적 예제

let list = [
    '01. 들어가며',
    '02. JS의 역사',
    '03. 자료형',
    '04. 함수',
    '05. 배열',
];

let newList = [];

for( let i = 0; i < list.length; i++){
    newList.push(
        list[i].slice(4)
        );
}
console.log(newList);

//금지어 콜라
//includes 
//문자가 있으면 true
//문자가 없으면 false

// function hasCola(str){
// if( str.indexOf('콜라') > -1) {
//     console.log('금칙어가 있습니다.')
// }else{
//     console.log('통과')
// }
// }
// hasCola('와 사이다가 짱이야');// -1
// hasCola('무슨소리, 콜라가 최고야');
// hasCola('콜라');//0

function hasCola(str){//콜라가 포함되어 있는지만 판별
    if( str.includes('콜라')) {
        console.log('금칙어가 있습니다.')
    }else{
        console.log('통과')
    }
    }
    hasCola('와 사이다가 짱이야');// -1
    hasCola('무슨소리, 콜라가 최고야');
    hasCola('콜라');//0
    


