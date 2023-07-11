function startNewGame(){
    //유용한 이름을 쓰지 않는 경우는 안 보여줌
    // || or 은 둘 중의 한 플레이어만 이름을 써도 가능
    // && 2인용 플레이어라서 이름을 둘 다 써야함
    if(players[0].name === '' || players[1].name === '' ){
        alert('Please set custom player names or both players!');
        return;//if 구문에서 하나라도 만족하면 return 해서 1번을 실행시키지 않음 = '이름을 써서 실행시켜라'
    }

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

    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');//clicked 된 필드는 호버 효과가 사라짐
    switchPlayer();
    
}
