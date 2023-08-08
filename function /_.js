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