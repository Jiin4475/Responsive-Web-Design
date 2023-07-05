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






let productNameInputElement = document.getElementById ('product-name') ;
let remainingCharsElement = document. getElementById ( 'remaining-chars');

// console.dir (productNameInputElement) ;

let maxAllowedChars = productNameInputElement. maxLength;

function updateRemainingCharacters (event) {
let enteredText = event. target. value;
let enteredTextLength = enteredText. length;
let remainingCharacters = maxAllowedChars - enteredTextLength;
remainingCharsElement.textContent= remainingCharacters;
}

productNameInputElement. addEventListener ( 'input', updateRemainingCharacters) ;