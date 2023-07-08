// let productNameInputElement = document.getElementById('product-name');
// let remainingCharsElement = document.getElementById('remaining-chars');


// // console.dir(productNameInputElement);
// let maxAllowedChars = productNameInputElement.maxLength;

// function updateRemainingCharacters(event) {
//   let enteredText = event.target.value;
//   let enteredTextLength = enteredText.Length;
//   //text가 얼마나 긴지 알 수 있음.

//   let remainingCharacters = maxAllowedChars - enteredTextLength;

//   remainingCharsElement.textContent = remainingCharacters;
// }
// productNameInputElement.addEventListener('input',updateRemainingCharacters );






const productNameInputElement = document.getElementById ('product-name') ;
const remainingCharsElement = document. getElementById ( 'remaining-chars');

// console.dir (productNameInputElement) ;

const maxAllowedChars = productNameInputElement. maxLength;

function updateRemainingCharacters (event) {
const enteredText = event.target.value;
const enteredTextLength = enteredText.length;

const remainingCharacters = maxAllowedChars - enteredTextLength;

remainingCharsElement.textContent = remainingCharacters;

//글씨의 제한이 60인데 10으로 내려가면 컬러가 달라짐 
if (remainingCharacters ===  0 ) {
    remainingCharsElement.classList.add('error');
    productNameInputElement.classList.add('error');
}else if(remainingCharacters <= 10 ){
    remainingCharsElement.classList.add('warning');
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.remove('error');
    productNameInputElement.classList.remove('error');
}else {
    //11미만이던 글자갯수가 11로 넘어가면 원상태로 돌아감
    remainingCharsElement.classList.remove('warning');
    productNameInputElement.classList.remove('warning');
  
}
}
productNameInputElement.addEventListener ('input', updateRemainingCharacters);