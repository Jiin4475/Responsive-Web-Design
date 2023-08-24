function startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('Please set custom names for both players!')
        return;
    }
    ganeAreaElement.style.display = 'block';
}