//플레이어 구성과 관련된 모든 로직을 담당
//openPlayerConfig는 수정 버튼을 눌렀을 때 나타나게함
function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerd;//+ '1' => 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}
//openPlayerConfig는 캔슬버튼등 을 눌렀을때 사라지게 함
function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
}
//form에 플레이어 저장:양식이 제출되면 실행
function savePlayerConfig(event){
    //브라우저의 기본 동작을 방해
    event.preventDefault();//페이지 재로드하지 않음
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();
    //직접 사용할 수 있는 내장된 함수 FormData()
    //event는 이 이벤트를 담당한 HTML 요소를 가리키는 타켓속성이 있음
    //trim(): 공백을 다 지워버림=> 공백을 제출하면 알림이 뜸

    if (!enteredPlayerName){//enteredPlayerName === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
       return;//호출한 함수의 실행이 중지됨:여기서 멈춤
    } 
    const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer +'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
}
