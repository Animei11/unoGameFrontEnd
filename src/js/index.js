function changeViewToGame() {
    // save all information of game to local storage
    let gameInfo = {

    }

    window.open("game.html");
}


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
        startGame(hostToken);
    }
}
function updatePlayerCount() {
    let playerCount = document.getElementById("player-count");
    playerCount.style.cssText = "";
    playerCount.textContent = numOfPlayers + "/4";
}

// function findGame(status) {
    // // Keeps track of the number of players joined in a room
    // // Needs to be deleted later, hard coded for simplicity purposes
    // let hostToken = "aRT03tc";
    // // Asks user for username and checks if it's correct
    // let inputNickname = prompt("Welcome to UNO! Please enter user ID: ");
    // let text = "Is " + inputNickname + " correct?";
    // while (confirm(text) === false) {
    //     text = "Exit the website?";
    //     if (confirm(text) === true) {
    //         window.close();
    //     }
    //     if (confirm(text) === false) {
    //         inputNickname = prompt("Please enter user ID: ");
    //         text = "Is " + inputNickname + " correct?";
    //     }
    // }
    //
    //
    //
    //
    // // Creates a general greeting for users
    // const greeting = "Welcome to UNO " + inputNickname + "!\n";
    // text = "Would you like to start the game?";
    //
    // // Start a new game is pressed
    // if (status === 0) {
    //     document.getElementById("demo").innerHTML = greeting + "You are Player 1. <br> Share this game ID with your friends: " + hostToken
    //         + "<br>Number of players joined: " + numOfPlayers + "/4";
    //     if (numOfPlayers > 1 && numOfPlayers < 5) {
    //         if (confirm(text) === true) {
    //             setTimeout(changeViewToGame, 650, hostToken);
    //         }
    //     }
    // }
    // // Join a game is pressed
    // if (status === 1) {
    //     let gameID = prompt(greeting + "Please enter gameID: ");
    //     setTimeout(changeViewToGame, 650, gameID);
    // }
// }