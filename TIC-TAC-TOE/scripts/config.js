//플레이어 구성과 관련된 모든 로직을 담당
//openPlayerConfig는 수정 버튼을 눌렀을 때 나타나게함
function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}
//openPlayerConfig는 캔슬버튼등 을 눌렀을때 사라지게 함
function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}
//form에 플레이어 저장:양식이 제출되면 실행
function savePlayerConfig(event){
//브라우저의 기본 동작을 방해
 event.preventDefault();//페이지 재로드하지 않음
 const formData = new FormData(event.target);
 const enteredPlayerName = formData.get('playername');//직접 사용할 수 있는 내장된 함수 FormData()
 //event는 이 이벤트를 담당한 HTML 요소를 가리키는 타켓속성이 있음
 console.log(enteredPlayerName);
}
