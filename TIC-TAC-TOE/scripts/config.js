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