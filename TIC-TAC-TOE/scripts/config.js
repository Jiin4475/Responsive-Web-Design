function openPlayerConfig(event){//오버레이 여는 함수
    //이벤트가 발생한 요소에 대한 accese //dataset.playerid = data-playerid
    editedPlayer = +event.target.dataset.playerid;//+ '1' => 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
playerConfigOverlayElement.style.display = 'none';
backdropElement.style.display = 'none';
formElement.firstElementChild.classList.remove('error');
errorsOutputElement.textContent = '';
formElement.firstElementChild.lastElementChild.value = '';//플레이어 이름지정하고 재수정할때 인풋칸 =''
}

function savePlayerConfig(event){
    event.preventDefault();//브라우저 디폴트 기능 막기
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();//공백은 =falsy

    if(!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;// 반환을 실행하면 함수가 중지됨
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer +'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
    
    players[editedPlayer -1].name = enteredPlayerName;
    // if(editedPlayer === 1){
    //     players[0].name = enteredPlayerName;
    // }else{
    //     players[1].name = enteredPlayerName;
    // }
    closePlayerConfig();

}