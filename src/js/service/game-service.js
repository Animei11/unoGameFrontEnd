// Game attributes
let hostToken = null; // If this player is the host or leave undefined
let numOfPlayers = 0;

let gameId;
let topCard;
let currentPlayerNickname;
let hands;
let skipNext;
let nextDraws;
let isClockwise;
let gameState;

// Player attributes
let nickname;

function getPlayerCards(nickname) {

}

function createNewGame(nickname) {
  let isValid = validateNickName(nickname);
  if (!isValid) {
    alert("Invalid nickname: " + nickname);
  } else {
    $.ajax({
      url: API_URL + "/create",
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        nickname: nickname
      }),
      success: handleCreateNewGameSuccess,
      error: handleError
    })
  }
}

function joinExistingGame(gameId, nickname) {
  let isValid = validateNickName(nickname);
  if (!isValid) {
    alert("Invalid nickname: " + nickname);
  } else {
    $.ajax({
      url: API_URL + "/join",
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        gameId: gameId,
        nickname: nickname
      }),
      success: handleJoinGameSuccess,
      error: handleError
    })
  }
}

function startGame(gameId, hostToken) {
  $.ajax({
    url: API_URL + "/start",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({
      gameId: gameId,
      hostToken: hostToken
    }),
    success: handleStartGameSuccess,
    error: handleError
  })
}

function drawCards(numOfCards) {

}

function playCard(card) {

}

/* ||---------- HELPER FUNCTIONS ----------|| */
function handleCreateNewGameSuccess(data) {
  // set game attributes and connect to server
  gameId = data.gameId;
  nickname = data.nickname;
  hostToken = data.hostToken;
  gameState = data.gameState;
  numOfPlayers = 1;
  console.log("New game created successfully!");
  console.log("gameId: " + gameId, "hostToken: " + hostToken, "gameState: " + gameState);

  // show player count
  updatePlayerCount();
  connectToSocket(gameId);
}

function handleJoinGameSuccess(data) {
  gameId = data.gameId;
  gameState = data.gameState;
  nickname = data.playerNickname;
  console.log("Join game successfully!");
  console.log("Joined gameId: ", gameId, "joined gameState: ", gameState);
  connectToSocket(gameId);
}

function handleStartGameSuccess(data) {
  syncGameWithServer(data.gameUpdate);
  storeGameInfo();
  changeViewToActiveGame();
}

function handleError(error) {
  console.log(error);
}
