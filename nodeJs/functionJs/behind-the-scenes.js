const hobbies = ['sports','cooking'];
hobbies.push('reading');

console.log(hobbies);



const  person = { age: 32 };

function getAudultYear (p){
    p.age -= 18;
    return p.age;
    // return p.age - 18;
}

console.log(getAudultYear({...person  }));
console.log(person); 