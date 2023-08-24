function openPlayerConfig(){//오버레이 여는 함수
playerConfigOverlayElement.style.display = 'block';
backdropElemnt.style.display = 'block';

}

function closePlayerConfig(){
playerConfigOverlayElement.style.display = 'none';
backdropElemnt.style.display = 'none';
formElement.firstElementChild.classList.remove('error');
errorsOutputElement.textContent = '';
}

function savePlayerConfig(event){
    event.preventDefault();//브라우저 디폴트 기능 막기
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();//공백은 =falsy

    if(!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;// 반환을 실행하면 함수가 중지됨
    }


}