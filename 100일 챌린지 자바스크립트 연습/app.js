let age = 32;
let userName = 'Max';
let hobbies = ['sports', 'cooking', 'reading'];
let job = {
    title: 'Developer', 
    place:'New York',
    salary: 50000
};

let totalAdultYears;

function calculateAdultYears(userAge) {
    let result;
    result = userAge - 18;
    return result;
}


totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 27;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);


let person = {
    name: 'Max', //property
    greet() {  //method
     console.log('Hello');
    }
};

person.greet();