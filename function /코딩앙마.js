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
    

//Array 
//1. push() 뒤에 삽입
//2. pop() 뒤에 삭제
//3. unshift() 앞에 삽입
//4. shift()  앞에 삭제

//splice(n, m) 특정요소 지움 n번 째 시작해서 m 갯수 지우기
let arr1 = [1,2,3,4,5];
arr.splice(1, 2);
console.log(arr1)// => [2,3,4]지워서 => [1,4,5]남음
//splice(n, m, x) 특정요소 지움 n번 째 시작해서 m 갯수 지우기 그리고 x요소 추가
arr1 = [1,2,3,4,5];
arr.splice(1,3,100, 200);
console.log(arr)// 1번부터 3번째 요소인 => 2,3,4 지우고 그 자리에 100, 200 추가해서 [ 1,100, 200, 5]

arr = ['나는', '철수', '입니다'];

arr.splice(1, 0, '대한민국', '소방관');
console.log(arr)// m 이 0 이면 아무것도 지우지 않음 1번재 자리 _ 철수 그래서 0과 1사이에 추가 문자열 들어감
//['나는', '대한민국', '소방관', '철수', '입니다']

//splice() 삭제된 요소 반환
arr = [1,2,3,4,5];
let result1 = arr.splice(1,2)
console.log(arr)// 삭제된 이후 배열에 남은 숫자[1,4,5]
console.log(result1) // 삭제된 숫자를 반환[2,3]



//slice(n,m) n 부터 m 까지 반환(m 번째는 반환하지 않고 그 전 숫자까지만 반환)
arr = [1,2,3,4,5];
arr.slice(1,4)// [2,3,4]

arr = arr.slice();// 괄호안에 아무것도 없으면 그대로 전체 복사
console.log(arr)//[1,2,3,4,5]



//concat (arr2,arr3..) 합쳐서 새 배열 반환
let arr3 = [1,2];

arr3.concat([3,4]);//[1,2,3,4]
arr3.concat([3,4],[5,6]);//[1,2,3,4,5,6]
arr3.concat([3,4],5,6);//[1,2,3,4,5,6]

//for.Each(fn) 배열의 반복 인수를 함수(fn)을 받음
//forEach 는 매개변수 3개를 받는데 1. item은 해당 요소, 2. index 0,1,2 3. users 해당배열 자체

let users = ['Mike', 'Tom',  'Jane'];
users.forEach((name, index) => {
console.log(name);
});

users = ['Mike', 'Tom',  'Jane'];
users.forEach((name, index) => {
console.log( `${index + 1}. ${name}`);
});
//=> 1. mlike 
//=> 2. Tom
//=> 3. Jane
//이렇게 순회 가능

//arr.infdexOF / arr.lastIndex Of

arr = [1,2,3,4,5,1,2,3];
arr.indexOf(3)// 2  없으면 -1 반환
arr.indexOf(3,3)//7 => 
arr.lastIndexOf(3);// 7 => 끝에서 부터 찾아서 

//arr.includes()포함하는지 확인
arr = [1,2,3];
arr.includes(2);// true
arr.includes(8);//false


//arr.fine(fn), arr.fineIndex(fn) => includes와 비슷하지만 좀 더 정교하게 찾을 수 있게 인자를 함수로 받음
//찾으면 true 반환, 없으면 undefined 반환 =>>>>>>> 만족하는 하나의 값만 찾음

arr = [1,2,3,4,5,6];

const result01 = arr.find((item) => { return item % 2 === 0;});

console.log(result01);

//fineIndex예제( 객체가 들어있는 배열)

let userList  = [
    {name: 'Mike', age: 30},
    {name: 'Jane', age: 27},
    {name: 'Tom', age: 10}
];

// const result02 = userList.find((user) => {
//     if(user.age < 19) {
//         return true;
//     }
//     return false;
// });

// console.log(result02); // {name: 'Tom', age: 10}

// const result02 = userList.findIndex((user) => {
//     if(user.age < 19) {
//         return true;
//     }
//     return false;
// });

// console.log(result02); // 2



//arr.filter(fn) => 만족하는 모든 요소를 배열로 반환
arr = [1,2,3,4,5,6];
const arr01 = arr.filter((item) => {
  return item % 2 === 0 ;
});

console.log(arr01);


//arr.reverse() 역순으로 재정렬
const arr02 = [1,2,3,4,5];
arr02.reverse();

//arr.map(fn) 함수를 받아서 특정 기능을 시행하고 새로운 배열을 반환

let userList01  = [
    {name: 'Mike', age: 30},
    {name: 'Jane', age: 27},
    {name: 'Tom', age: 10}
];


//Object.assign({}, user);// 유저의 새로운 값을 부여 할  때 

let newUserList = userList01.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(userList01);//기존의 리스트
console.log(newUserList);//새 리스트


//배열을 합치기 Join, split

let arr03 = ['안녕', '나는', '영희야!'];

let result03 = arr03.join('  ');//()=> 아무것도 넣지 않으면 (,) 들어감 (' ') 공백넣기
console.log(result03);

let user3 = 'Mike, Jane,Tom,Tony';

//split() 문자열을 배열로 바꿔줌 (',')=>쉼표 기준으로 나누기
const result04 = user3.split(',');
console.log(result04);// =>['Mike', 'Jane','Tom','Tony']


let str01 = 'Hello, My name is Mike.!';
const result05 = str01.split('');
console.log(result05); //=>'H', 'e', 'l', 'l', 'o', ',', ' ', ]대충 이런식읨


//Array.isArray() 배열인지 아닌지 확인하기
 let user6 = {//객체
    name: 'Mike',
    age: 30,
 };

 let userList02 = ['Mike', 'Tom', 'Jane'];//배열


 //구분하기 어려움
 console.log(typeof user6);//object => 객체
 console.log(typeof userList02);//object => 객체
 
//구분하기
console.log(Array.isArray(user6));//false => 객체
 console.log(Array.isArray(userList02));//true => 객체

 //arr.sort()/ arr.reduce() => 
  //arr.sort() => 배열 재정렬, 배열 자체가 변경됨
  let arr04 = [1,5,4,2,3];
  arr04.sort();
  console.log(arr04);//[1, 2, 3, 4, 5]

//주의
// let arr05 = [27,8,5,13];
// arr05.sort();
// console.log(arr05);//[13, 27, 5, 8] => 틀린 답임

let arr05 = [27,8,5,13];

// function fn (a,b){
//     return a - b;
// }
// arr05.sort(fn);

//============>
arr05.sort((a,b)=> {return a - b ;})// a랑 b를 비교해서 A 가 크면 양수, 같으면 0, 작으면 음수 
//=> a작으면 앞으로 보냄 0 은 가만히 있기, a가 크면 b 가 작은거니까 => b를 앞으로 보냄

console.log(arr05);//[13, 27, 5, 8] => [5, 8, 13, 27]

  let str02 = ['a','c', 'd','e', 'b'];
  str02.sort();
  console.log(str02);// ['a', 'b', 'c', 'd', 'e']


//reduce()=> 배열의 모든 수 합치기
//forEach 예시=========>
let arr06 = [1,2,3,4,5];

//for, for of , forEach

let result06 = 0;
arr06.forEach((num) => {
    // result = result + num ;
    result06+= num;
});

console.log(result06);

//===> reduce() 활용 => 인수로 함수를 받음, 
//(누적 계산값, 현재값) => {return 계산값};
arr06 = [1,2,3,4,5];

const result07 = arr.reduce((prev,cur) => {
    return prev + cur ;
}, 0);//0 => 초기값

console.log(result07);

let userList03 = [
    {name:'Mike', age: 30},
    {name:'Tom', age: 10},
    {name:'Jane', age: 27},
    {name:'Sue', age: 26},
    {name:'harry', age: 42},
    {name:'Steave', age: 60},

];
//19세 이상만 
// let result08  = userList03.reduce((prev, cur) => {
//     if(cur.age > 19) {
//         prev.push(cur.name);
//     }
//     return prev;
// }, []);
// console.log(result08);


//나이의 합
// let result08  = userList03.reduce((prev, cur) => {
//     return prev += cur.age ;
// }, 0);
// console.log(result08);

//이름이 3letter 이상 = Tom

let result08 = userList03.reduce((prev, cur)=> {
if(cur.name.length === 3 ) {
    prev.push(cur.name);
}
return prev;
}, []);
console.log(result08);


//구조 분해 할당 => Destructuring assignment
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// let [x, y] = [1,2];
// console.log(x);// => 1
// console.log(y);// => 2

let users01 = ['Mike','Tom','Jane'];
let [user01 , user02, user03] = users01;

console.log(user01);//mike
console.log(user02);//tom
console.log(user03);//jane

//해당하는 값이 없을 때

// let [e,f,g] = [1,2];//e=>1, f=>2, g=> undefined. 
//to avoid an error  값을 미리 할당함
let [e=3,f=4 ,g=5] = [1,2];
console.log(e);//1
console.log(f);//2
console.log(g);//5 => 기본값

//배열 구조 분해 : 일부 반환값 무시
[user01, , user02] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(user01);//Mike 
console.log(user02);//Jane

//배열 구조 분해: 바꿔치기
 a =1;
 b =2;
 [a,b] = [b,a]//바꿈

 //객체 구조 분해
//  user04 = {name: 'Mike', age:30};
//  let {name, age} = user04;

//  console.log(name);//=> Mike
//  console.log(age);//=> 30

//  //=> key값 바꿀 수 있음 : 새로운 변수 이름으로 할당
//  let {name: userName,age:userAge} =user04;
//  console.log(userName);//=> Mike
//  console.log(userAge);//=> 30

 //객체 구조 분해 : 기본값
 let user04 = {name: 'Mike', age:30, gender: 'female'};
 let {name, age, gender='male'} = user04; //gender=> undefined, gender= male
 console.log(user04);