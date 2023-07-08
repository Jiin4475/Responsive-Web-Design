//숫자ㅡ합치기

const calculateSumButtonElement = document.querySelector('#calculator button');


function calculateSum(){
const userNumberInputElement = document.getElementById('user-number');
const enteredNumber = userNumberInputElement.value;

let sumUpToNumber = 0;

for(let i =0 ; i < enteredNumber; i++ ) {
    sumUpToNumber = sumUpToNumber + i;
}
const outputResultElement = document.getElementById('calculated-sum');
outputResultElement.textContent = sumUpToNumber;
outputResultElement.style.display = 'block';
}


calculateSumButtonElement.addEventListener('click',calculateSum);

//highlight links 
//for of 예제
const highlightLinksButtonElement = document.querySelector('#highlight-links button');


function highlightLinks(){
const anchorElements = document.querySelectorAll('#highlight-links a');

for(const anchorElement of anchorElements){
    anchorElement.classList.add('highlight');
}
}

highlightLinksButtonElement.addEventListener('click',highlightLinks);

//display user data

const dummyUserData = {
    firstName:'Jiin',
    lastName:'Yu',
    age:27
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

// for in 객체의 모든 속성에 대해 무언가를 실행해야 할 때
function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');
    
    //innerHtml 은 html태그롸 텍스트 전체임 =''; 모든 항목이 지워지는것
    outputDataElement.innerHTML = '';


    //데이타가 담겨있는 dummyuserData에 각 key(first name,last name,age)
    for(const key in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');

        const outputText = key.toUpperCase() + ': '+ dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement)
    }
}

displayUserDataButtonElement.addEventListener('click',displayUserData);

//입력된 숫자를 얻는 것으로 클릭하면 자바 스크립트에서 주사위를 굴려 서 목표 숫자를 유도하거나, 굴리는데 필요한 만큼 자주 굴려야하는데 반드시 1 에서 6사이여야함 
//statistic / Roll the dice

rollDiceButtonElement = document.querySelector('#statistics button');

//helper
function rollDice(){
 return Math.floor(Math.random() * 6) + 1;//Math.floor(): 5.64 =>5
}

//main
function deriveNumberOfDiceRolls(){
const targetNumberInputElement = document.getElementById('user-target-number');
const diceRollsListElement = document.getElementById('dice-rolls');

const enteredNumber =targetNumberInputElement.value;
diceRollsListElement.innerHTML = '';

let hasRolledTargetNumber = false;
let numberOfRolls = 0;

while(!hasRolledTargetNumber){
    const rolledNumber = rollDice();
    // if(rolledNumber == enteredNumber){
    //     hasRolledTargetNumber =true;
    // }
    numberOfRolls = numberOfRolls + 1;//++
    const newRollsListItemElement = document.createElement('li');
    const outputText = 'Roll' +numberOfRolls + ': '+rolledNumber;
    newRollsListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollsListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
}
  const outputTotalRollsElement = document.getElementById('put-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}
rollDiceButtonElement.addEventListener('click',deriveNumberOfDiceRolls);
