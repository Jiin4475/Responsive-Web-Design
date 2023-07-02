

// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
let onlineCourse = 'A course';
let priceCourse = 100;
let mainGoals = ['finish on time','Do it everyday', 'practice'];


// 2) Output ("alert") the three variable values
// alert(onlineCourse);
// alert(priceCourse);
// alert(mainGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter
let myCourse = {
    name: 'A course',
    price: 100,
    goals: ['finish on time', 'Do it everyday', 'practice']
};

alert(myCourse.name);
alert(myCourse.price);
alert(myCourse.goals);


// 4) Also output the second element in your "main goals" variable
alert(myCourse.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)


//내가 한 거
// function myGoals(){
// let result;
// result = mainGoals.push('I AM SO LAZY');
// return result;
// };

function getListItem(array,arrayIndex){
let arrayElement = array[arrayIndex];
return arrayElement;
}
// 6) Execute your custom command from (5) and output ("alert") the result

let firstGoal = getListItem(myCourse.goals, 0);
alert(firstGoal);
