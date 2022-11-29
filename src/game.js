// Length 104
const cardArray = ['0R', '1R', '1R', '2R', '2R', '3R', '3R', '4R', '4R', '5R', '5R', '6R', '6R', '7R', '7R', '8R', '8R', '9R', '9R', 'skipR', 'skipR', 'reverseR', 'reverseR', 'draw2R', 'draw2R',
'0G', '1G', '1G', '2G', '2G', '3G', '3G', '4G', '4G', '5G', '5G', '6G', '6G', '7G', '7G', '8G', '8G', '9G', '9G', 'skipG', 'skipG', 'reverseG', 'reverseG', 'draw2G', 'draw2G',
'0B', '1B', '1B', '2B', '2B', '3B', '3B', '4B', '4B', '5B', '5B', '6B', '6B', '7B', '7B', '8B', '8B', '9B', '9B', 'skipB', 'skipB', 'reverseB', 'reverseB', 'draw2B', 'draw2B',
'0Y', '1Y', '1Y', '2Y', '2Y', '3Y', '3Y', '4Y', '4Y', '5Y', '5Y', '6Y', '6Y', '7Y', '7Y', '8Y', '8Y', '9Y', '9Y', 'skipY', 'skipY', 'reverseY', 'reverseY', 'draw2Y', 'draw2Y',
'Wild', 'Wild', 'Wild', 'Wild', 'draw4', 'draw4', 'draw4', 'draw4'];
const cardColorArray = ["red", "green", "blue", "yellow"];
// Global variables used for multiple functions 
let interval = 70; 
let card = cardArray[Math.floor(Math.random() * 105)];
let color = cardColorArray[3];




// Draws a number of cards and adds to the player's hand, can be used for drawing a card, +2, +4 
function drawCards(numOfCards) {
    if (numOfCards !== 0) {
        let card = cardArray[Math.floor(Math.random() * 105)];
        var img = document.createElement("img");
        img.src = "cards/" + card + ".png";
        img.className = "playableCards";
        interval -= 3;
        img.style = "left: " + (interval) + "%";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
}


// Prints as many cards as needed to the player's hand 
function playersCards(numOfCards) {
    if (numOfCards !== 0) {
        let card = cardArray[Math.floor(Math.random() * 105)];
        interval -= 3;
        var img = document.createElement("img");
        img.src = "cards/" + card + ".png";
        img.className = "playableCards";
        img.style = "left: " + interval + "%";
        var src = document.getElementById("header");
        src.appendChild(img);
        setTimeout(playersCards, 150, numOfCards-1);
    }
}


// Displays the number of cards someone has (Maybe there's a way to do this I don't know)
function displayOpponentsCards (numOfCards) {
    var img = "cards/back.png";
    for (i = 0; i < numOfCards; i++) {
        document.body.appendChild(img);
    }
}


// For UNO button 
function uno() {
    prompt("hello");
}


// I'm sticking with the color changes. I think it looks nicer than the backgrounds I found. Feel free to change it 
function colorChange(color) {
    switch(color) {
        case "red":
            document.body.style.background = "#87140e";
            break;
        case "green":
            document.body.style.background = "#0d522b";
            break;
        case "blue":
            document.body.style.background = "#0f34a3";
            break;
        case "yellow":
            document.body.style.background = "#ada30a";
            break;
    }
}