let paragraphElement = document.querySelector('p');


function changedParagraphText(event){
    paragraphElement.textContent = 'clicked!';
    console.log('paragraph clicked!')
    console.log(event);
}


paragraphElement.addEventListener('click',changedParagraphText );



let inputElement = document.querySelector('input');
function retrieveUserInput(event){
     //입력된 요소의 값을 가져올려면 value 속성을 써야함
    //나는 input(enteredText)에 입력되는 내용(value)원해
    let enteredText = inputElement.value;
    // let enteredText =event.target.value;
    //let enteredText = event.data;//가장 최근의 값을 줌
   

    console.log(enteredText);
    // console.log(event);

}


inputElement.addEventListener('input',retrieveUserInput );