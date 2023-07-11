const gameData = [
   [0,0,0],
   [0,0,0],
   [0,0,0],
];


let editedPlayer = 0;
let activePlayer = 0;//첫번째 요소에 접근
let currentRound = 1;

//그룹화하기
const players =[
 {
    name: '',
    symbol: 'X'
 },
 {
    name: '',
    symbol: 'O'
 },
];

//overlay 나타나기
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
//form access 
const formElement = document.querySelector('form');
//error access
const errorsOutputElement =document.getElementById('config-error');
//active-game 
const gameAreaElement = document.getElementById('active-game');
//it's your turn 
const activePlayerNameElement = document.getElementById('active-player-name');


//버튼클릭해서 edit 
const editPlayer1BntElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
//캔슬버튼을 누르면 오버레이 사라짐
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
//star new game button 접근
const startNewGameBtnElement = document.getElementById('start-game-btn');
//게임필드 접근 모든 list 아이템 선택 
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');
 


editPlayer1BntElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);
startNewGameBtnElement.addEventListener('click',startNewGame);


// for(const gameFieldElement of gameFieldElements){
//    gameFieldElement.addEventListener('click',selectGameField);
// };

gameBoardElement.addEventListener('click',selectGameField);