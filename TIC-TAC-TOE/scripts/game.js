function startNewGame(){
    //유용한 이름을 쓰지 않는 경우는 안 보여줌
    // || or 은 둘 중의 한 플레이어만 이름을 써도 가능
    // && 2인용 플레이어라서 이름을 둘 다 써야함
    if(players[0].name === '' || players[1].name === '' ){
        alert('Please set custom player names or both players!');
        return;//if 구문에서 하나라도 만족하면 return 해서 1번을 실행시키지 않음 = '이름을 써서 실행시켜라'
    }
    activePlayerNameElement.textContent = players[activePlayer].name;  
    //1.처음 게임필드에서 보이게 함/버튼을 누르면
    gameAreaElement.style.display = 'block'
    }
    
    
     //필드 선택 후 다른 플레이어에게 넘어감
     //activePlayer = 0(첫번째 플레이어)으로 시작, 그래서 if (activePlayer === 0 현재첫번째 플레이어라면) activePlayer = 1(다른 플레이어에게 넘겨줘), else 아니라면 (현재 두번째 플레이어) activePlayer = 0 (첫번째 플레이어한테 넘겨줘)
function switchPlayer(){
    if (activePlayer === 0){
        activePlayer = 1 ;
    }else {
        activePlayer = 0;
    }
    // 턴이 돌 때마다 이름이 달라짐
    activePlayerNameElement.textContent = players[activePlayer].name;  
    }


//1.which field was clicked 
//2.해당 목록에 액티브 기호 추가해서 화면에 표시
//3. 2번이 실행이 되면 다른플레이어로 전환(다른 기호)
//4.이미 내부에 기호가 있는지 선택하지 않았는지 확인
//5.선택한 모든 필드와 자바스크립트코드에서 어떤 필드가 어떤 플레이어에게 속하는지 추적
function selectGameField(event){
    //우리가 클릭한 요소가 리스트 li 아이템이 아니라면 우리는 아무것도 실행하지 않음: 리스트 필드가 아닌 다른 공간을 클릭 했을 때 
    if (event.target.tagName !== 'LI'){
        return;
    }
    const selectedField = event.target;

    //data-col="1" 숫자가 아닌 "문자" 이기 때문에 (-1를) 하면 숫자로 변환함. e.g parseInt(),+(대상앞에),(대상뒤에)-
    const selectedColumn = selectedField.dataset.col -1;
    const selectedRow = selectedField.dataset.row -1;
     
    //이미 클릭된 필드를 상대 플레이어가 못 클릭하게 해야 할때
    //gameData = 0 임 그래서 만약 이미 차지된 필드라면 1또는 2임, 그래서 0이 아니라면 이미 클리되어서 값(1또는 2)을 받았기 때문!!
    if(gameData[selectedRow][selectedColumn] > 0){
        alert('Please select an empty field!')
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    //clicked 된 필드는 호버 효과가 사라짐
    selectedField.classList.add('disabled');
    
     
    //[3개의 배열 중 하나 ][ 고른 배열의 아이템]
    //어떤 플레이어(1 아니면 2)가 어떤 칸을 눌렀는지 추적 keep track
    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    console.log(winnerId);

    currentRound = currentRound + 1;
    switchPlayer();
    
    }

    //위너를 결정하는 법  : ===1 은 플레이어 1임
    function checkForGameOver(){
        // checking the rows for equality
    for(let i= 0; i < 3; i++){

        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
            ) {
            return gameData[i][0];
            }
    }
    for(let i= 0; i < 3; i++){
    //checking the column for equality
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
            ) {
            return gameData[0][i];
            }
    }
        //Diagonal:top left to bottom right
    if( gameData[0][0] > 0 &&
        gameData[1][1]=== gameData[1][1] &&
        gameData[1][1]===gameData[2][2] 
        ) {
        return gameData[0][0];
        }

        //Diagonal:bottom left to top right
    if( gameData[2][0 ] > 0 &&
        gameData[2][0]=== gameData[1][1] &&
        gameData[1][1]===gameData[0][2]
        ) {
        return gameData[2][0];
        }
        if(currentRound === 9 ){//9라운드라면 9개칸을 다 클릭했다는 사실 = 무승부
         return - 1;//
        }
        return 0;//0을 반환하는거는 디폴트고 위너가 없다는 것
    }
