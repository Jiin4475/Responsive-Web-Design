function greetUser(greetingPrefix, userName = 'user'){
    //console.log(greetingPrefix +' ' + userName +'!!');
    console.log(`${greetingPrefix} ${userName}`);//templete listeral?
}

greetUser('Hi', 'MAX');
greetUser('Hello');


//...   ㅐ열을 여러 개별 값으로 분산시킴
function sumUp(...numbers){//... 3개의 . 은 제한이 없다는 것을 의미
    

    let result = 0;

    for(const number of numbers){
        result += number;
    }
    return result;
}

const inputNumbers = [1,5,10,11,20,31]

console.log(sumUp(...inputNumbers));


console.log(sumUp);