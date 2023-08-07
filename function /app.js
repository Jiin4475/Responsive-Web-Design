var users = [
    {id : 1, name: 'ID', age: 36},
    {id : 2, name: 'BJ', age: 32},
    {id : 3, name: 'JM', age: 32},
    {id : 4, name: 'PJ', age: 27},
    {id : 5, name: 'HA', age: 25},
    {id : 6, name: 'JE', age: 26},
    {id : 7, name: 'JI', age: 31},
    {id : 8, name: 'MP', age: 23}

];

//1.명령형 코드

//1. 30세 이상인 users 는 남긴다

var temp_users = [];
for (let i = 0; i < users.length; i++ ){
    if(users[i].age >= 30 ){
        temp_users.push(users[i]);
    }
}
console.log(temp_users);
//2. 30세 이상인 users names 를 수집한다.
let names = [];
for (let i = 0; i < temp_users.length; i++){
    names.push(temp_users[i].name);
}
console.log(names);

//3. 30세 미만인 users를 수집한다.

var temp_users = [];
for (let i = 0; i < users.length; i++ ){
    if(users[i].age < 30 ){
        temp_users.push(users[i]);
    }
}
console.log(temp_users);

//4. 30세 미만인 users의 ages 는 수집한다.

let ages = [];
for (let i = 0; i < temp_users.length; i++){
    ages.push(temp_users[i].age);
}
console.log(ages);


//2._filter, -map 으로 리팩토링 

function _filter(list, predi){
var new_list = [];
for (let i = 0; i < list.length; i++ ){
    if(predi(list[i])) {
        new_list.push(list[i]);
    }
  }
  return new_list;
}
//30세이상
console.log(
    _filter(users, function(user){return user.age >=30; }));
//30세 미만
console.log(
    _filter(users, function(user){return user.age < 30; }));
//예시
console.log(_filter([1,2,3,4], function(num) { return num % 2; }))
console.log(_filter([1,2,3,4], function(num) { return !(num % 2); }))



//3. each 만들기
  //1. -each로 -map, -filter 중복제거

  //2. 외부 다형성 
     //1. array_like, arguments, document.querySelectorAll

  //3. 내부 다향성
     //1.predi, iter, mapper
    

//3. 커링
     //1. _curry, _curryr

//4. _reduce 만들기

//5. 파이프 라인 만들기
     //1. _pipe
     //2. _go
     //3. user 에 _go 적용
     //4. 화살표 함수 간단히 
