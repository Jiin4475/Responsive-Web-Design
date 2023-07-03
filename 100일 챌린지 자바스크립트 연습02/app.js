// document.body.children[1].children[0].href = 'https://google.com'

// console.dir()
 //global 전역 변수 
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a');// p a {color:red; }
anchorElement.href = 'https://academind.com'; // 이 선택자 조건에일치하는 첫 번째 요소를 알려줌, getbyid 보다 훨씬 탄력적임