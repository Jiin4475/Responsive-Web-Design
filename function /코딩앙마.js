//생성자 함수
function User (name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}

// let user7 = new User('Han', 40);
// user7.sayName();


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



//arr.filter(fn) => 만족하는 모든 요소를 배열로 반환 => true 평가된 함수를 꺼낸다면 , reject는 없애버림
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

 //나머지 매개변수, 전개 구문

 // ...
//  function showName(name) {
//     console.log(name);
//  }
//  showName('Mike');// Mike
//  showName('Mike', 'Tom');// Mike, ?


 //함수의 인수를 얻는 방법
 //1. arguments
//함수로 넘어 온 모든 인수에 접근
//함수내에서 이용 가능한 지역 변수
//length/index 
//Array 형태의 객체
//배열의 내장 메서드 없음(forEach, map)


function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
};
showName('Mike', 'Tom');
 

//2. 나머지 매개변수 쓰기: 정해지지 않은 갯수의 인수를 배열로 나타냄

function showName(...names){
console.log(names);
};

showName();//[]
showName('Mike');//[Mike]
showName('Mike', 'Tom');//[Mike, Tom]

// 나머지 매개변수 예제 : 전달 받은 모든 수를 더해야함 (더하려면 reduce)
function add(...numbers){//=> 배열
   let result = numbers.reduce((prev, cur) =>  prev+ cur);
    console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

//예제 2 : 유저 객체를 만들어주는 생성자 함수

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
};

 const user8 = new User('Mike', 30,'Css');
 const user9 = new User('Tom', 20,'Js', 'React');
 const user10 = new User('Jane', 10,'English');


 console.log(user8);
 console.log(user9);
 console.log(user10);


 //전개 구문 (spread syntax) : 배열

//  let arr4 = [1,2,3];
//  let arr5 = [4,5,6];

//  let result09 = [...arr4, ...arr5];
//  console.log(result09);//[1,2,3,4,5]

 //전개구문: 객체
//  let user05 = {name:'Mike'};
//  let mike = {...user05, age:30};

//  console.log(mike);//{name: 'Mike', age: 30} Object.assign({}, ) 을 쓸 필요 없음

 //전개 구문: 복제

 let arr4 = [1,2,3];
 let arr5 = [...arr4];//[1,2,3]

 let user05 = {name:'Mike', age: 30};
 let user06 = {...user05};

 user06.name = 'Tom';
 console.log(user05.name);// Mike
 console.log(user06.name);//Tom

//전개 구문 예제
//arr11을 [4,5,6,1,2,3]으로

let arr10 = [1,2,3];
let arr11 = [4,5,6];

//내가 한 방법
// let result10 = [...arr11,...arr10];
// console.log(result10);//[4, 5, 6, 1, 2, 3]

//예시 답안
arr11.reverse().forEach((num)=>{
   arr10.unshift(num);
});
// console.log(arr10);//[4, 5, 6, 1, 2, 3] => x before .reverse()
console.log(arr10);//[4, 5, 6, 1, 2, 3]

let user11 = {name:'Mike'};
let info = {age:30};
let fe = ['Js','React'];
let lang = ['korean', 'English'];

user11 = Object.assign({}, user11,info, {
    skills: [],
});

// //skills 에 넣기(전개 구문 안 쓰고)
// fe.forEach((item) => {
//     user11.skills.push(item);
// });
// lang.forEach((item) => {
//     user11.skills.push(item);
// });
// console.log(user11);//{name: 'Mike', age: 30, skills: Array(4)}


//전개구문 이용하기

user11 = {
    ...user11,
    ...info,
    skills:[...fe,...lang],
};

 console.log(user11);//{name: 'Mike', age: 30, skills: Array(4)}

 //클로저 closure:
 //함수가 렉시컬 환경의 조함, 함수가 생성될 당시의 외부 변수를 기억
 //생성 이후에도 꼐속 접급 가능

 //어휘적 환경(Lexical ENvironment)
let one;
one = 1;
function addOne(num) {
    console.log(one + num );

};
addOne(5);

function makeCounter() {
    let num = 0;
    return function() {
        return num++;
    };
}

let counter = makeCounter();
console.log(counter());//0
console.log(counter());//1
console.log(counter());//2

//setTimeout:일정시간이 지난 후 함수 실행

// 방법_1
// function fn() {
//     console.log(3);
// };
// setTimeout(fn, 3000);//함수, 시간
// //방벚_2
// setTimeout(function() {
//     console.log(3)
// }, 3000);
// //방법_3


// const tId = function showName(name){
//     console.log(name);
// }
// setTimeout(showName,3000,'Mike')//(실행할 함수, 시간, 인수)
// clearTimeout(tId);//예정된 타임아웃을 지울 수 있음


// serInterval: 일정 시간 간격으로 함수 실행
// function showName(name){
//     console.log(name);

// }
// setTimeout(showName, 3000, 'Mike');

// console.log(tId);

//setIterval 예제+ 자동 종료
let num3 = 0;
function showTime(){
    console.log(`안녕하세요. 접속한지 ${num3++}초가 지났습니다.`);
    if(num3 > 5) {
        clearInterval(tId);
    }
}
// const tId = setInterval(showTime, 1000);

//call : call 메서드는 모든 함수에서 사용할 수 있으며 this를 특정 값으로 지정 할 수 있음
const jane = {
    name: 'Jane',
};

const tom = {
    name: 'Tom',
};

function showThisName() {
    console.log(this.name);
} 
// showThisName();// 
// showThisName.call(jane);
// showThisName.call(tom); //Jane => 함수 호출하고, call 을 부른다음 this 로 사용할 객체 넘김

// function update(birthYear, occupation){
//    this.birthYear = birthYear;
//    this.occupation = occupation;
// }

// update.call(jane, 1996, 'developer');
// console.log(jane);//{name: 'Jane', birthYear: 1996, occupation: 'developer'}

// update.call(tom, 2000, 'student');
// console.log(tom);//{name: 'Tom', birthYear: 2000, occupation: 'student'}


//apply : 함수 매개변수를 처리하는 방법을 제외허면 call 과 같음
//call 은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply 는 매개변수를 배열로 받음
//call 은 배열안의 값을 직접 받고 => (null, 2,3,4)
//apply  배열로 받음 => (null, [2,3,4])

update.apply(jane,[1996, 'developer']);
console.log(jane);//{name: 'Jane', birthYear: 1996, occupation: 'developer'}

update.apply(tom, [2000, 'student']);
console.log(tom);//{name: 'Tom', birthYear: 2000, occupation: 'student'}

//bind :함수의 this 값을 바꿀 수 있음


function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
 }

 const updateJane = update.bind(jane);
 updateJane(1999, 'Nurse');
 console.log(jane);//{name: 'Jane', birthYear: 1999, occupation: 'Nurse'}

 //실용예제

 const user12 = {
    name:'Mike',
    showName: function() {
        console.log(`hello, ${this.name}`);
    },
 };
 user12.showName();//hello, Mike
 let fn = user12.showName;
 fn();//hello, => fn에 할당할 떄 this를 잃어버린 것
 fn.call(user12);//hello, Mike => 잃어버린 this를 call 로 다시 불렀기 때문
 fn.apply(user12);//hello, Mike

 //응용 문제 
 let boundFn = fn.bind(user12);
 boundFn();








 //상속, prototype
//상속_
//공통된 변수 처리하기
  //1. car 라는 상위 변수 만들기
  const car = {
    wheels:4,
    drive() {
        console.log('drive..')
    }
  }

  //2. 공통된 부분인 wheels, drive 지우기
const bmw = {
    color: 'red',
    navigation:1,
};
const benz = {
    color: 'black',
};
const audi = {
    color: 'blue',
};
//3. _proto_ 만들기=> car의 상속을 받음(bmw라는 곳에 값이 없으면 상속을 받아 car로 올라가서 상속 받을 수 있는것 = prototype chain)

bmw._proto_ =car;
benz._proto_ =car;
audi._proto_ =car;

//hasOwnProperty 를 써서 가지고 있는지 확인 가능 => 갖고 있으면 true, 없으면 False

//생성자 함수 이용하기

// const car = {
//     wheels:4,
//     drive() {
//         console.log('drive..');
//     };
//   };
// const Bmw = function(color) {
//     this.color = color;
//     this.wheels = 4,
//     this.drive = function () {
//         console.log('drive..');
//     };
// };

// const x5 = new Bmw('red');
// const z4 = new Bmw('blue');

// x5._proto_ =car;
// z4._proto_ =car;


// const Bmw = function(color) {
// this.color = color;
// };
//=================================
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function() {
//     console.log('drive..');
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function () {
//     console.log('STOP!!');
// };
//==================================

// Bmw.prototype = {
//     wheels:4,
//     drive() {
//         console.log('drive..');
//     },
//     navigation: 1,
//     stop() {
//         console.log('STOP!!!');
//     },
// };
// => 이런식으로 만들면 (z4.constructor === Bmw);=> false 위처럼 하나씩 풀어 써야함

// Bmw.prototype = {
//     constructor: Bmw,//수동으로 명시해서 쓰면 사용 가능
//     wheels:4,
//     drive() {
//         console.log('drive..');
//     },
//     navigation: 1,
//     stop() {
//         console.log('STOP!!!');
//     },
// };

//  const x5 = new Bmw('red');
//  const z4 = new Bmw('blue');


//  //instanceof 연산자 : 해당 객체로부터 생성된 것인지 확인하는 연산자로 true or false 반환
//  console.log(z4 instanceof Bmw);//true
//  console.log(z4.constructor === Bmw);//true


 //초기값을 얻기만 하고 바꾸지 못하게 만들 때 ==>  closure

  Bmw = function(color){
    const c = color;
    this.getColor = function (){
        console.log(c);
    }
 }

 const x5 = new Bmw('red');
 //color => black 으로 바꾸려 한다면 = Uncaught SyntaxError: Invalid or unexpected token

 //class
//생성자 예제
 const User01 = function () {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name)
    }
 }

 const mike = new User01 ('Mike', 30);
 console.log(mike);

 //class 로 만들기
 class User02 {
constructor(name, age) {//=> constructor 객체로 만들어 주는 생성자메서드
    this.name = name;
    this.age = age;
}
showName() {
    console.log(this.name);
}
 }

 const kane = new User02('Kane',19);
 console.log(kane);

 //class 에서 상속 만들기=> extends

//  class Car {
//     constructor(color) {
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {console.log('drive..')};
//     stop() {console.log('STOP~!')}

//  }
//  class Hundai extends Car {
//     park() {
//         console.log('PARK')
//     }
//  }

//  const z6 = new Hundai('blue');


//상속에 관해서 정리하자면 car 라는 변수에 color, wheels 를 넣고, 외부에서 Hundai class 라는 것을 새로 만들 때
// class_상속 (extend) 를 상속받아서 직접 넣지 않아도 car 만 입력해도 자동으로 상속 받을 수 있음


//method overriding 메소드 오버라이팅
// : 만약 Hundai 내부에 car에서 정의한 메소드와 동일한 메소드가 있을 때

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {console.log('drive..')};
    stop() {console.log('STOP~!')}

 }
 class Hundai extends Car {
    constructor(color){
        super(color);//super => 부모를 먼저 
        this.navigation =  1;//새로운 것을 추가 할 때
    }
    park() {
        console.log('PARK')
    }
    stop() {
        super.stop();// =>>>>>> super.를 사용하면 부모 클래스도 상속받고 새로운 것도 유지함
        console.log('START~!')}//START~! 덮어씀

 }

 const z6 = new Hundai('blue');







 //어떤 일이 완료된 후 실행되는 함수 => callback 함수
 //promis
//  const pr = new Promise((resolve, reject) =>{

//  })
//판메자입장
//  const prSuccese = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK')
//     }, 3000)
//  });

//  const prFail = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('ERROR')
//     }, 3000)
//  });


//소비자 입장
//  const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK')
//     }, 3000)
//  });
//  pr.then(
//     function(result){console.log(result + '가지러 가자.')
// },// -> 이행되었을때
//     function(err){console.log('다시 주문해주세요..')}//-거부되었을때
//  )


 //then 대신 쓸 수 있는 것 => catch , finally 
 //catch 는 reject 경우만 쓸 수 있음
//  pr.then(
//     function(result){console.log(result + '가지러 가자.')
// },
//     function(err){console.log('다시 주문해주세요..')}
//  )
//  //======== then =========>>>>>> catch
//  //1. 가독성이 좋음
//  //2. 에러를 잡기가 좋음
//  pr.then(function(result){}
//  ).catch(
//     function(err){}
//  );

 //==then >>>>>> catch >>>>>>> finally
 //로딩 화면을 없애버릴 때 유용함
//  pr.then(function(result){}
//  ).catch(
//     function(err){}
//  ).finally(
//     function(){
//         console.log('---주문 끝---')
//     }
//  )


 //promis + catch + finally 예제
//  const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        // resolve('OK')
//        reject(new Error('err....'));
//     }, 1000);
//  });

//  console.log('시작');
//  pr.then((result)=>{
//     console.log(result);
//  })
//  .catch((err) => {
//     consdole.log(err);
//  })
//  .finally(()=> {
//     console.log('끝');
//  })


//콜백지옥 =*************************
// const f1 = (callback) => {
//     setTimeout (function() {
//     console.log ("1번 주문 완료");
//     callback(); 
//     }, 1000);
//     }
//     const f2 = (callback) => {
//     setTimeout(function () {
//     console.log ("2번 주문 완료"); 
//     callback();
//     }, 3000);
//     };
//     const f3 = (callback) => {
//     setTimeout (function () {
//     console.log("3번 주문 완료") ;
//     callback();
//     }, 2000);
//     };

//     console.log('시작');
//     f1(function () {
//         f2(function() {
//             f3(function() {
//                 console.log('끝');
//             });
//         });
//     });

//
//  const f1 = () =>{
//  return new Promise((res,rej) => {
//     setTimeout(()=>{
//         res('1번 주문 완료');
//     }, 1000);
//   });
// };

// const f2 = (message) =>{
//     console.log(message);
//     return new Promise((res,rej) => {
//        setTimeout(()=>{
//            res('2번 주문 완료');
//        }, 3000);
//      });
//    };

//    const f3 = (message) =>{
//     console.log(message)
//     return new Promise((res,rej) => {
//        setTimeout(()=>{
//            res('3번 주문 완료');
//        }, 2000);
//      });
//    };


   //promise.all => 프로미스로 넘겨준 값이 배열로 들어옴 ['1번 주문 완료', '2번 주문 완료', '3번 주문 완료']
   //한꺼번에 시작하고 모두 이행되면 값을 사용 할 수 있음 +시간 절약
   //정보가 하나라도 누락되면 페이지를 보여주지 않음 => 
//    console.time('x');
//    Promise.all([f1(), f2(), f3()]).then((res)=> {
//     console.log(res);
//     console.timeEnd('x');
//    });

//race => 하나라도 완료되면 끝
// console.time('x');
// Promise.race([f1(), f2(), f3()]).then((res)=> {
//  console.log(res);
// //  console.timeEnd('x');
// });


//    //프로미스 체이닝(Promise chaining)
//    console.log('시작');
//    f1()
//    .then((res)=> f2(res))
//    .then((res)=> f3(res))
//    .then((res)=> console.log(res))
//    .catch(console.log)
//    .finally(() => {
//     console.log('끝')
//    })




//async await
// async function getName() {
//     // return 'Mike'; //Mike
//     return Promise.resolve('Tom');// promise 를 사용=> 'tom

// }

// console.log(getName());//Promise {<fulfilled>: 'Mike'}
// getName().then((name)=> {
//     console.log(name);
// })

//에러 
async function getName() {
    // return 'Mike'; //Mike
throw new Error('err...');// promise 를 사용=> 'tom

}
getName().catch((err)=> {
    console.log(err);
})

function getName(name) {
    return new Promise((res,rej) => {
       setTimeout(()=>{
           res(name);
       }, 1000);
     });
   };
//await 은 async 안에서만 사용 가능
   async function showName(){
    const result = await getName('Mike');
    console.log(result);
   }

   console.log('Start!');
   showName();



// async +await If(error) => try {}, catch {}
   const f1 = () =>{
    return new Promise((res,rej) => {
       setTimeout(()=>{
           res('1번 주문 완료');
       }, 1000);
     });
   };
   
   const f2 = (message) =>{
       console.log(message);
       return new Promise((res,rej) => {
          setTimeout(()=>{
            //   res('2번 주문 완료');
            rej(new Error('err...'));
          }, 3000);
        });
      };
   
      const f3 = (message) =>{
       console.log(message)
       return new Promise((res,rej) => {
          setTimeout(()=>{
              res('3번 주문 완료');
          }, 2000);
        });
      };

console.log('시작')
async function order(){
    try{
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    }
    catch (e){
        console.log(e)
    }
    console.log('종료');
}

order();
   
    //   f1()
    //      .then((res)=> f2(res))
    //      .then((res)=> f3(res))
    //      .then((res)=> console.log(res))
    //      .catch(console.log)
    //      .finally(() => {
    //       console.log('끝')
    //      })
      

    //Gernerator : 함수의 실행을 중간에 멈췄다 재개할 수 있는 기능

    function* fun(){
        try{
            console.log(1);
            yield 1;
            console.log(2);
            yield 2;
            console.log(3);
            console.log(4);
            yield 3;
            return 'finish';
        }
        catch(e){
            console.log(e)
        }
        
    }
    const ab = fun();

    // ab.next(); => yield 1;
    //ab.return ('END')  done => End


    //iterable => 반복이 가능
    //Symbol.iterator 메서드가 있음
    //Symbol.iterator 는 iterator 반환해야 함

    //iterator
    //1. next 메서드를 가짐
    //2. next 메서드는 value와 done 속성을 가진 객체를 반환함
    //3. 작업이 끝나면 done 은  true 를 가진다


const arr20 = [1,2,3,4,5];
 // generator 는 외부로 부터 값을 받을 수 있음  next() 에 인수를 전달
 // generator 는 값을 미리 만들지 않음=> 필요한 값만 그때 그때 생성