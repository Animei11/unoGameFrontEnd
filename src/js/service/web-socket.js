const url = "http://localhost:8080";
let stompClient;


function connectToSocket(gameId) {
  console.log("Connecting to game with id: " + gameId);
  let socket = new SockJS(url + "/gameplay");
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    console.log("Connected to the frame: " + frame);
    pingOtherPLayers();

    stompClient.subscribe(
      "/topic/game-progress/" + gameId,
      handleServerMessage
    )
  })
}

function pingOtherPLayers() {
  // ping other players
}


function handleServerMessage(response) {
  let data = JSON.parse(response.body);
  console.log("Game-progress: " + data);

  let messageType = data.messageType;
  console.log("message type: " + messageType);
  switch (messageType) {
    case "MESSAGE":
      handleMessage(data);
      break;
    case "JOIN":
      handleJoin(data);
      break;
    case "START":
      handleStart(data);
      break;
    case "GAME_UPDATE":
      handleGameUpdate(data);
      break;
    case "CARDS_DRAWN":
      handleCardsDrawn(data);
      break;
  }
}


/* ||---------- Different Message Handlers ----------||*/
function handleMessage(data) {
  console.log("Handling message: ", data);
}

function handleJoin(data) {
  console.log("handling join: ", data)

  console.log("game state: " + data.gameState);
  numOfPlayers = data.numOfPlayers;
  gameState = data.gameState;

  // update player count displayed on home page
  // if the current page is index.html
  let currentPath = window.location.pathname;
  let currentFile = currentPath.substring(
    currentPath.lastIndexOf("/") + 1,
    currentPath.lastIndexOf(".")
  );
  if (currentFile === "index") {
    updatePlayerCount();
  }

  // notify host to start game
  if (gameState === "FULL" && hostToken !== null) {
    console.log("game is full...")
    alert("Game is Full! Start game!");
  }
}

function handleStart(data) {
  console.log("handling start: ", data)
  syncGameWithServer(data.gameUpdate);

  alert("Game started!");
  handleStartGameSuccess(data);
}

function handleGameUpdate(data) {
  console.log("handling game update: ", data)
}

function handleCardsDrawn(data) {
  console.log("handling cards drawn: ", data)
}

function syncGameWithServer(update) {
  topCard = update.topCard;
  currentPlayerNickname = update.currentPlayerNickname;
  hands = update.hands;
  skipNext = update.skipNext;
  nextDraws = update.nextDraws;
  isClockwise = update.isClockwise;
  gameState = update.gameState;
}
