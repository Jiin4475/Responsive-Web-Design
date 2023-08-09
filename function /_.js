//커링
     //1. _curry, _curryr(함수의 인자를 적요하다가 필요한 인자가 다 모이면 실행)
     function _curry(fn) {
        return function(a, b) {
            return arguments.length == 2 ? fn(a, b) : function(b) {return fn(a, b) };
            
        }
     }

    function _curryr(fn) {
    return function(a, b) {
        return arguments.length == 2 ? fn(a, b) : function(b) {return fn(b, a) };
    }
      }

   //_get 만들어 좀 더 간단하게 하기 => 안전하게 정보를 가져옴
   var _get = _curryr(function _get(obj, key) {
   return  obj == null ? undefined : obj[key];
   });


//2._filter, -map 으로 리팩토링 (수정)
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

    var _map = _curryr(_map),
    _filter = _curryr(_filter);
    

var slice = Array.prototype.slice;
function _rest(list, num ) {
return slice.call(list, num  || 1);
}
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