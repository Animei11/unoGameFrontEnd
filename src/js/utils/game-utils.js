const gameInfoKey = "gameInfo"

function storeGameInfo() {
  let gameInfo = {
    hostToken: hostToken,
    numOfPlayers: numOfPlayers,
    gameId: gameId,
    topCard: topCard,
    currentPlayerNickname: currentPlayerNickname,
    hands: hands,
    skipNext: skipNext,
    nextDraws: nextDraws,
    isClockwise: isClockwise,
    gameState: gameState,
    nickname: nickname
  }
  console.log("gameinfo:", gameInfo)
  localStorage.setItem(gameInfoKey, JSON.stringify(gameInfo));
}

function fetchGameInfo() {
  return JSON.parse(localStorage.getItem(gameInfoKey));
}

// loads game info passed in to the game attributes in game-service
function loadGameInfo(gameInfo) {
  hostToken = gameInfo.hostToken;
  numOfPlayers = gameInfo.numOfPlayers;
  gameId = gameInfo.gameId;
  topCard = gameInfo.topCard;
  currentPlayerNickname = gameInfo.currentPlayerNickname;
  hands = gameInfo.hands;
  skipNext = gameInfo.skipNext;
  nextDraws = gameInfo.nextDraws;
  isClockwise = gameInfo.isClockwise;
  gameState = gameInfo.gameState;
  nickname = gameInfo.nickname;
}

function clearGameStorage() {
  localStorage.removeItem("gameInfo");
}

function changeViewToActiveGame() {
  // save all information of game to local storage
  storeGameInfo();

  // window.open("game.html"); // opens a new window (undesirable)

  // switch to game play window
  window.location.replace(
    "http://" + window.location.host + "/unogame-frontend/src/game.html")

}

function validateNickName(nickname) {
  if (nickname === null || nickname === undefined || nickname.length <= 0) {
    return false;
  }
  return true;
}
