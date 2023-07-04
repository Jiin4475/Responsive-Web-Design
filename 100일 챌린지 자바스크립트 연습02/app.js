// document.body.children[1].children[0].href = 'https://google.com'

// console.dir()
 //global 전역 변수 
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a');// p a {color:red; }
anchorElement.href = 'https://academind.com'; // 이 선택자 조건에일치하는 첫 번째 요소를 알려줌, getbyid 보다 훨씬 탄력적임

//ADD an  Element
//1. create the new element without writing in HTML
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'this leeds to Google!!';


//2. Get access to the parent element that should hold the new element 
let firstParagraph = document.querySelector('p');

//3. Insert the new element into the parent element content 
//append(); 기존의 children 요소 다음에 추가
//insert before(); 기존요소 전에 추가 
firstParagraph.append(newAnchorElement); 

//Remove element
//1. Select the element should be removed
let firstH1Element = document.querySelector('h1');

//2.Remove it
firstH1Element.remove();

// firstH1Element.parentElement.removeChild(firstH1Element);// older browser

//move element 첫 번째 p를 마지막 p 다음으로 옮기기
//부모요소로 접근= 옮기고 싶음 것을 일단 부모요소에 다시 넣어줌 그러면 자동으로 맨마지막에 넣어줌
 firstParagraph.parentElement.append(firstParagraph);


// firstParagraph.parentElement.insertBefore(firstParagraph);


//innerHTML = 텍스트와 html tag 들이 접근 가능함

console.log(firstParagraph.innerHTML);
firstParagraph.innerHTML = 'Hi This is <strong>important!!</strong>.';