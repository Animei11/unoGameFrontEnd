function startGame(gameID){
    // Whatever the new URL will be to join friends game
    window.open("game.html");       
}

function findGame(status){
    // Keeps track of the number of players joined in a room
    let numOfPlayers = 3;
    // Needs to be deleted later, hard coded for simplicity purposes 
    let hostToken = "aRT03tc";
    // Asks user for username and checks if it's correct 
    var nickName = prompt("Welcome to UNO! Please enter user ID: ");
    let text = "Is " + nickName + " correct?";
    while (confirm(text) == false) {
        text = "Exit the website?";
        if (confirm(text) == true) {
            window.close;
        }
        if (confirm(text) == false) {
            nickName = prompt("Please enter user ID: ");
            text = "Is " + nickName + " correct?";
        }
    }
    
    // Creates a general greeting for users
    var greeting = "Welcome to UNO " + nickName + "!\n";
    text = "Would you like to start the game?";
    
    // Start a new game is pressed
    if (status == 0) {
        document.getElementById("demo").innerHTML = greeting + "You are Player 1. <br> Share this game ID with your friends: " + hostToken
        + "<br>Number of players joined: " + numOfPlayers + "/4";
        if (numOfPlayers >1 && numOfPlayers < 5) {
            if(confirm(text) == true);
             {
                setTimeout(startGame, 650, hostToken);
            }
        }
    }
    // Join a game is pressed
    if (status == 1) {
        var gameID = prompt(greeting + "Please enter gameID: ");
        setTimeout(startGame, 650, gameID);
    }
}