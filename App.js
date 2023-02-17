const waitingListButton = document.getElementById("waitingListButton")
const createGames = document.getElementById("createGames")

function createNewGames() {
    const playerOne = document.createElement('div');
    const playerOneText = document.createTextNode(`Solomon D.`);
    playerOne.appendChild(playerOneText);
    createGames.appendChild(playerOne)
}

waitingListButton.addEventListener("click", () =>{
    return;
})