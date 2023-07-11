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