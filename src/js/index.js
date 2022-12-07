
function createGame() {
    let inputNickname = prompt("Please enter your nickname: ");
    createNewGame(inputNickname);
}

function joinGame() {
    let inputGameId = prompt("Please game id: ");
    let inputNickname = prompt("Please enter your nickname: ");
    joinExistingGame(inputGameId, inputNickname);
}

function startGameAsHost() {
    console.log("starting game as host....")
    if (gameId === null) {
        alert("You cannot start the game with no game id.");
    } else if (hostToken === null) {
        alert("You are not the host.")
    } else if (numOfPlayers <= 1) {
        alert("You cannot start the game by yourself.")
    } else {
        startGame(gameId, hostToken);
    }
}
function updatePlayerCount() {
    let playerCount = document.getElementById("player-count");
    playerCount.style.cssText = "";
    playerCount.textContent = numOfPlayers + "/4";
}