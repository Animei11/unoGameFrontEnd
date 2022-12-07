const url = "http://localhost:8080";
let stompClient;


function connectToSocket(gameId) {
  console.log("Connecting to game with id: " + gameId);
  let socket = new SockJS(url + "/gameplay");
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    console.log("Connected to the frame: " + frame);
    pingOtherPLayers();

    stompClient.subscribe("/topic/game-progress/" + gameId,
      // function (response) {
      //   console.log("Relaying response: "+ response);
      // handleServerMessage(response);
      // }
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
    case "FULL":
      handleFull(data);
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
  updatePlayerCount();

  // notify host to start game
  if (gameState === "FULL" && hostToken !== null) {
    console.log("game is full...")
    alert("Game is Full! Start game!");
  }
}

function handleFull(data) {
  console.log("handling full: ", data)
}

function handleStart(data) {
  console.log("handling start: ", data)
}

function handleGameUpdate(data) {
  console.log("handling game update: ", data)
}

function handleCardsDrawn(data) {
  console.log("handling cards drawn: ", data)
}
