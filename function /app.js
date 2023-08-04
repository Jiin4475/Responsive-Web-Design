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
var tempUsers = [];
for (var i = 0; i < users.length; i++ ){
    if (users[i].age >= 30 ) {
    tempUsers.push(users[i]);
    }
}
console.log(tempUsers);
//2. 30세 이상인 users names 를 수집한다.
var names = [];
for (var i = 0; i < tempUsers.length; i++) {
    names.push(tempUsers[i].name);
}
console.log(names);
//3. 30세 미안인 users를 거른다.
var tempUsers = [];
for (var i = 0; i < users.length; i++ ){
    if (users[i].age < 30 ) {
    tempUsers.push(users[i]);
    }
}
console.log(tempUsers);
//4. 30세 미안인 users의 ages 는 수집한다.

var age = [];
for (var i = 0; i < tempUsers.length; i++) {
    age.push(tempUsers[i].age);
}
console.log(age);


//2._filter, -map 으로 리팩토링 

function _filter(list, predi){
    var newList = [];
    for (var i = 0; i < list.length; i++ ){
        if (predi(list[i])) {
            newList.push(list[i]);
        }
    }
return newList;
}

function _map(list, mapper) {
    var newList = [];
for (var i = 0; i < list.length; i++) {
    newList.push(mapper(list[i]));
}
return newList;
}


var over_30 = _filter(users, function(user) {return user.age >= 30;});
console.log(over_30);


// var names = _map(over_30, function(user) {
//     return user.name;
// });
// console.log(names);


console.log(
    _filter(users, function(user) {return user.age >= 30;})
)

console.log(
    _filter(users, function(user) {return user.age < 30;})
)


console.log(
    _map(
        _filter(users, function(user) {return user.age >= 30; }),
        function(user) { return user.name;}));


console.log(
    _map(
        _filter(users, function(user) {return user.age < 30; }),
        function(user) { return user.age;}));



//3. each 만들기
  //1. -each로 -map, -filter 중복제거

  //2. 외부 다형성 
     //1. array_like, arguments, document.querySelectorAll

  //3. 내부 다향성
     //1.predi, iter, mapper
     _map ([1,2,3,4,], function (v) {
     return v + 18;
     });

//3. 커링
     //1. _curry, _curryr
    
     function _curry(fn) {
     return function(a, b) {
     return arguments.length == 2 ? fn(a,b) : function(b) { return fn(a, b); };
    }
}

function _curryr(fn) {
return function (a, b) {
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(b, a); };
    
    }
}



    var add = _curry(function(a, b) {
        return a + b; 
    });

    var add10 = add(10);
    var add5 = add(5);


    console.log( add10(5));
    console.log(add(5)(3))
    console.log(add5(3));
    console.log(add(10)(3));
    //인자가 2개 들어오면 =>  if (arguments.length == 2) return fn(a,b); 
    console.log(add(1, 2));

     
    //인자가 하나일 떄
    console.log(add(10)(3));


var sub = _curryr(function (a, b) {
    return a - b;
});

console.log(sub(10, 5)); 
var sub10 = sub(10);
console.log( sub10(5));


     //2. _get 만들어 좀 더 간단하게 하기
var _get =  _curryr(function _get(obj, key) {
 return obj == null ? undefined : obj[key];
});

console.log(
    _map(
        _filter(users, function(user) {return user.age >= 30; }), _get('name')));

console.log(
    _map(
        _filter(users, function(user) {return user.age < 30; }),
        _get('age')));
      



var user1 = users[0];
console.log(user1.name);
console.log(_get(user1, 'name'));
console.log(_get('name')(user1));

//=>
var getName = _get('name');

console.log( getName(user1));
console.log( getName(users[3]));
console.log( getName(users[4]));


//4. _reduce 만들기

//5. 파이프 라인 만들기
     //1. _pipe
     //2. _go
     //3. user 에 _go 적용
     //4. 화살표 함수 간단히 
