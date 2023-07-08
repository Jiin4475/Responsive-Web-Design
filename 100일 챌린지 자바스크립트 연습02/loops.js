// for
for (let i = 0; i < 10; i++){
   console.log(i);
}

//for of
const users = ['max','anna','joel'];

for(const user of users){
    console.log(user);

}

//for in
const loggedInUser = {
    name: 'max',
    age: 32,
    isAdmin:true
};

for(const propertyName in loggedInUser){
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}


//while 조건이 충족되는 한 계속 돌아감

let isFinished = false;
while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}
console.log('done!')