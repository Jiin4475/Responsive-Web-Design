
let editedPlayer = 0;

//overlay 나타나기
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

//form access 
const formElement = document.querySelector('form');

//error access
const errorsOutputElement =document.getElementById('config-error');

//버튼클릭해서 edit 
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');

//캔슬버튼을 누르면 오버레이 사라짐
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');


editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);