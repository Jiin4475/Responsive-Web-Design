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

// function _filter(list, predi){
//     var new_list = [];
//     _each(list, function(val){
//         if(predi(val)) new_list.push(val);
//     });
//         return new_list;
//     }
//  // _map (수정)
//  function _map(list, mapper){
//     var new_list = [];
//     _each(list, function(val){
//     new_list.push(mapper(val));
//     });
// return new_list;
// }



// //명령적인 코드 제거- 중복 제거
// function _each(list, iter) {
//     for (var i = 0; i < list.length; i++){
//         iter(list[i]);
//     }
//     return list;
// }

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
     //1.predi(조건리턴), iter, mapper(사이사이 돌아다니는)
_map([1,2,3,4],function(v) {
        return v + 10;
});

//3. 커링
     //1. _curry, _curryr(함수의 인자를 적요하다가 필요한 인자가 다 모이면 실행)
    //  function _curry(fn) {
    //     return function(a, b) {
    //         return arguments.length == 2 ? fn(a, b) : function(b) {return fn(a, b) };
            
    //     }
    //  }

    // function _curryr(fn) {
    // return function(a, b) {
    //     return arguments.length == 2 ? fn(a, b) : function(b) {return fn(b, a) };
    // }
    //   }

     var add = _curry(function(a, b){
        return a + b;
     });

var add10 = add(10);
var add5 = add(5);
console.log(add10(5));
console.log( add(5)(3));
console.log(add5(3));
console.log(add(10)(3));
console.log( add(1, 2));


var sub =  _curryr(function (a, b) {
 return a - b;
});

console.log( sub(10,5));
var sub10 = sub(10);
console.log(sub10(5))


   //_get 만들어 좀 더 간단하게 하기 => 안전하게 정보를 가져옴
//   var _get = _curryr(function _get(obj, key) {
//     return  obj == null ? undefined : obj[key];
//   });

  console.log(
    _map (_filter(users, function(user){return user.age >=30; }), _get('name')));
 
console.log(
    _map (_filter(users, function(user){return user.age < 30; }), _get('age')));



//   var user1 = users[0];
//   console.log(user1.name);
//   console.log(_get(user1, 'name'));
//   //이렇게 curryr 함수를 써서 하면
//   console.log(_get('name')(user1));

//   var get_name = _get('name');//=> 이 'name' 자체가 이름을 꺼내는 함수가 되어버림  
  
//   console.log(get_name(user1));
//   console.log(get_name(users[3]));
//   console.log(get_name(users[4]));

// //원하는 값을 찾을 때?
// var user1 = users[0];
// //console.log(users[10].name);
// // console.log(_get(users[10], 'name'));



//4. _reduce 만들기
//memo = add(0, 1);
//memo = add(memo, 2);
//memo = add(memo, 3);
//return memo;

console.clear();

//4. _reduce 만들기
var slice = Array.prototype.slice;
function _rest(list, num ) {
return slice.call(list, num  || 1);
}


//=> 필터 맵은 어레이로 들어온걸 어레이로 내보내는 역할
//=> 리듀스는 원래들어온 자료와 다른 축약시켜서 원하는 새로운 결과로 내보냄
function _reduce(list, iter, memo){
    if(arguments.length == 2) {
        memo =list[0];
        list = _rest(list);// slice 어레이의 메소드
    }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
    return memo;
}

console.log(_reduce([1,2,3], add, 10));
//==> 6

//3 번째 인자 생략

console.log(_reduce([1,2,3], add));
//=>6

console.log(_reduce([1,2,3,4], add, 10));
//=>10=>20

//5. 파이프 라인 만들기=> 함수를 리턴하는 함수
     //1. _pipe = reduce(추상화버전 특화됨)
function _pipe(){
 var fns = arguments;
 return function(arg){
    return _reduce(fns, function(arg , fn){
    return fn(arg);
    }, arg)
 }
}
    
function _go(arg) {
     var fns = _rest(arguments);
     _pipe.apply(null, fns)(arg);

}


var f1 = _pipe(
    function(a) {return a + 1;},
    function(a) {return a * 2;},
    function(a) {return a * a;}) ; //2 * 2

console.log( f1(1) );


     //2. _go => 두번째 인자부터 받아서 결과를 나타내는 함수
     //(pipe의 즉시 실행 함수)
_go(1, 
        function(a) {return a + 1;},
        function(a) {return a * 2;},
        function(a) {return a * a;},
        console.log);
   
    
     //3. user 에 _go 적용

    
     console.log(
        _map (
            _filter(users, function(user){return user.age >=30; }), 
            _get('name')));
    
    console.log(
        _map (
            _filter(users, function(user){return user.age < 30; }), 
         _get('age')));

   //<위의 유저스에서 받아서 나이필터를 한 다음 다시 한 번 함수를 받아서 맵을 걸고 이름만 걸러냄 > 

     //4. 화살표 함수 간단히  간결하게 표현됨
     _go(users,
        _filter(function(user) {return user.age >= 30; }),
        _map(_get('name')),
         console.log);

        _go(users,
        _filter(user => user.age < 30),
         _map(_get('age')), console.log);

//6. _each 오ㅣ부 다향성 높ㅣㅣ
    //1. _each null 넣어도 에러 안 나기
 _each (null, console.log)    
 console.log(_filter(null, function(v){ return v;}))

// _go(null,
//     _map(function(v) { return v % 2; }),
//     _filter(function(v){ return v * v; }),
//     console.log);


    //2. _keys 만들기(어떤 형태의 값이 들어오던지)
    //3. _keys 에서도 _is_object 인지 검사하여 null 에러 안나기.
    console.log(_keys({name:'ID', age:33 }));
    console.log(_keys([1,2,3,4]));
    console.log(_keys(10));
    console.log(_keys(null));//=> 이부분을 안전하게 만들기

    // function _is_object(obj) {// object 가 맞는지 확인하는 함수
    //     return typeof obj == 'object' && !!obj;
    // }

    // function _keys(obj){
    //     return _is_object(obj) ? Object.keys(obj) :[];
    // }
    
    //4. _each 외부 다gud성 높이기
    _each({
        13: 'ID',
        19: 'HD',
        29: 'YD'
    }, function(name) {
        console.log(name);
    });
   console.log( _map({
        13: 'ID',
        19: 'HD',
        29: 'YD'
    }, function(name) {
       return name.toLowerCase(); 
    }));


    _go({
        1: users[0],
        3: users[2],
        5: users[4] 
        },
         console.log,
    _map(function(user) {
        return user.name.toLowerCase();
        }),
      console.log);
    
