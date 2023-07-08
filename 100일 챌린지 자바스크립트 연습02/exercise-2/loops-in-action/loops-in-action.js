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

