function greetUser(greetingPrefix, userName = 'user'){
    console.log(greetingPrefix +' ' + userName +'!!');
}

greetUser('Hi', 'MAX');
greetUser('Hello');


function sumUp(numbers){

    let result = 0;

    for(const number of numbers){
        result += number;
    }
    return result;
}

console.log(sumUp([1,2,3,4]));