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
// let names = [];
// for (let i = 0; i < temp_users.length; i++){
//     names.push(temp_users[i].name);
// }
// console.log(names);

//3. 30세 미만인 users를 수집한다.

var temp_users = [];
for (let i = 0; i < users.length; i++ ){
    if(users[i].age < 30 ){
        temp_users.push(users[i]);
    }
}
console.log(temp_users);

//4. 30세 미만인 users의 ages 는 수집한다.

// let ages = [];
// for (let i = 0; i < temp_users.length; i++){
//     ages.push(temp_users[i].age);
// }
// console.log(ages);


//2._filter, -map 으로 리팩토링 

// function _filter(list, predi){
// var new_list = [];
// for (let i = 0; i < list.length; i++ ){
//     if(predi(list[i])) {
//         new_list.push(list[i]);
//     }
//   }
//   return new_list;
// }


// // _map
// function _map(list, mapper){

//     let new_list = [];
// for (let i = 0; i < list.length; i++){
//     new_list.push(mapper(list[i]));
// }
// return new_list;
// }

function _filter(list, predi){
    var new_list = [];
    _each(list, function(val){
        if(predi(val)) new_list.push(val);
    });
        return new_list;
    }
 // _map (수정)
 function _map(list, mapper){
    var new_list = [];
    _each(list, function(val){
    new_list.push(mapper(val));
    });
return new_list;
}



//명령적인 코드 제거- 중복 제거
function _each(list, iter) {
    for (var i = 0; i < list.length; i++){
        iter(list[i]);
    }
    return list;
}

//---30세 이상의 이름 찾기
var over_30 =_filter(users, function(user){return user.age >=30; });
console.log(over_30);

var names = _map(over_30, function(user) {
return user.name;
});
console.log(names);


//---30세 미만
var under_30 = _filter(users, function(user){return user.age < 30; });
console.log(under_30);

var ages = _map(under_30, function(user) {
    return user.age;
    });
console.log(ages);

//수정 => 30세이상의 유저를 거르는 인자 1, map 을 돌면서 해당하는 유저들의 이름을 걸러줌
console.log(
    _map (
        _filter(users, function(user){return user.age >=30; }), 
        function (user) {return user.name}));

console.log(
    _map (
        _filter(users, function(user){return user.age < 30; }), 
        function (user) {return user.age}));


//30세이상
// console.log(
//     _filter(users, function(user){return user.age >=30; }));
// //30세 미만
// console.log(
//     _filter(users, function(user){return user.age < 30; }));
//예시
// console.log(_filter([1,2,3,4], function(num) { return num % 2; }))
// console.log(_filter([1,2,3,4], function(num) { return !(num % 2); }))



//3. each 만들기
  //1. -each로 -map, -filter 중복제거
//=>map, filter는 메서드(객체지향프로그램)임 순수함수가 아님=> 해당클래스의 인스턴스에서만 사용 가능= array 가 아니면 쓸 수 없음 => 그렇다면 array 같은 객체에서 쓸 수 있다? =? jquery 
console.log(
    [1,2,3].map(function(val){
        return val * 2;
    })
);


console.log(
    [1,2,3].filter(function(val){
        return val % 2;
    })
);


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
