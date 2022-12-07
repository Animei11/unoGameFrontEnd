// Length 108
const cardArray = [{card: "0-R", color: "red"}, {card: "1-R", color: "red"}, {card: "1-R", color: "red"},
    {card: "2-R", color: "red"}, {card: "2-R", color: "red"}, {card: "3-R", color: "red"}, {card: "3-R", color: "red"},
    {card: "4-R", color: "red"}, {card: "4-R", color: "red"}, {card: "5-R", color: "red"}, {card: "5-R", color: "red"},
    {card: "6-R", color: "red"}, {card: "6-R", color: "red"}, {card: "7-R", color: "red"}, {card: "7-R", color: "red"},
    {card: "8-R", color: "red"}, {card: "8-R", color: "red"}, {card: "9-R", color: "red"}, {card: "9-R", color: "red"},
    {card: "skip-R", color: "red"}, {card: "skip-R", color: "red"}, {card: "reverse-R", color: "red"},
    {card: "reverse-R", color: "red"}, {card: "draw2-R", color: "red"}, {card: "draw2-R", color: "red"},
    {card: "0-G", color: "green"}, {card: "1-G", color: "green"}, {card: "1-G", color: "green"},
    {card: "2-G", color: "green"}, {card: "2-G", color: "green"}, {card: "3-G", color: "green"},
    {card: "3-G", color: "green"}, {card: "4-G", color: "green"}, {card: "4-G", color: "green"},
    {card: "5-G", color: "green"}, {card: "5-G", color: "green"}, {card: "6-G", color: "green"},
    {card: "6-G", color: "green"}, {card: "7-G", color: "green"}, {card: "7-G", color: "green"},
    {card: "8-G", color: "green"}, {card: "8-G", color: "green"}, {card: "9-G", color: "green"},
    {card: "9-G", color: "green"}, {card: "skip-G", color: "green"}, {card: "skip-G", color: "green"},
    {card: "reverse-G", color: "green"}, {card: "reverse-G", color: "green"}, {card: "draw2-G", color: "green"},
    {card: "draw2-G", color: "green"}, {card: "0-B", color: "blue"}, {card: "1-B", color: "blue"},
    {card: "1-B", color: "blue"}, {card: "2-B", color: "blue"}, {card: "2-B", color: "blue"}, {card: "3-B", color: "blue"},
    {card: "3-B", color: "blue"}, {card: "4-B", color: "blue"}, {card: "4-B", color: "blue"}, {card: "5-B", color: "blue"},
    {card: "5-B", color: "blue"}, {card: "6-B", color: "blue"}, {card: "6-B", color: "blue"}, {card: "7-B", color: "blue"},
    {card: "7-B", color: "blue"}, {card: "8-B", color: "blue"}, {card: "8-B", color: "blue"}, {card: "9-B", color: "blue"},
    {card: "9-B", color: "blue"}, {card: "skip-B", color: "blue"}, {card: "skip-B", color: "blue"},
    {card: "reverse-B", color: "blue"}, {card: "reverse-B", color: "blue"}, {card: "draw2-B", color: "blue"},
    {card: "draw2-B", color: "blue"}, {card: "0-Y", color: "yellow"}, {card: "1-Y", color: "yellow"},
    {card: "1-Y", color: "yellow"}, { "2-Y": "yellow"}, {card: "2-Y", color: "yellow"}, {card: "3-Y", color: "yellow"},
    {card: "3-Y", color: "yellow"}, {card: "4-Y", color: "yellow"}, {card: "4-Y", color: "yellow"},
    {card: "5-Y", color: "yellow"}, {card: "5-Y", color: "yellow"}, {card: "6-Y", color: "yellow"},
    {card: "6-Y", color: "yellow"}, {card: "7-Y", color: "yellow"}, {card: "7-Y", color: "yellow"},
    {card: "8-Y", color: "yellow"}, {card: "8-Y", color: "yellow"}, {card: "9-Y", color: "yellow"},
    {card: "9-Y", color: "yellow"}, {card: "skip-Y", color: "yellow"}, {card: "skip-Y", color: "yellow"},
    {card: "reverse-Y", color: "yellow"}, {card: "reverse-Y", color: "yellow"}, {card: "draw2-Y", color: "yellow"},
    {card: "draw2-Y", color: "yellow"}, {card: "wild-wild", color: "wild"}, {card: "wild-wild", color: "wild"},
    {card: "wild-wild", color: "wild"}, {card: "wild-wild", color: "wild"}, {card: "draw4-wild", color:"wild four"},
    {card: "draw4-wild", color:"draw four"}, {card: "draw4-wild", color:"draw four"}, {card: "draw4-wild", color:"draw four"}]

// Global variables used for multiple functions
let interval = 70;
let card = cardArray[Math.floor(Math.random() * 107)];
const CARD_IMG_DIRECTORY_PATH = "img/cards/";
const CARD_IMG_EXTENSION = ".png";
// let color = cardColorArray[3];


// Draws a number of cards and adds to the player's hand, can be used for drawing a card, +2, +4
function drawCards(numOfCards) {
    if (numOfCards !== 0) {
        let card = cardArray[Math.floor(Math.random() * 107)];
        let img = document.createElement("img");
        img.src = CARD_IMG_DIRECTORY_PATH + card.card + CARD_IMG_EXTENSION;
        img.className = "playableCards";
        interval -= 3;
        img.style.cssText = "left: " + (interval) + "%";
        let src = document.getElementById("header");
        src.appendChild(img);
    }
}


// Prints as many cards as needed to the player's hand 
function playersCards(numOfCards) {
    if (numOfCards !== 0) {
        let card = cardArray[Math.floor(Math.random() * 107)];
        interval -= 3;
        let img = document.createElement("img");
        img.src = CARD_IMG_DIRECTORY_PATH + card.card + CARD_IMG_EXTENSION;
        img.className = "playableCards";
        img.style.cssText = "left: " + interval + "%";
        img.addEventListener('click', handleClick);
        let src = document.getElementById("header");
        src.appendChild(img);
        setTimeout(playersCards, 150, numOfCards - 1);
    }
}

function handleClick(event) {
    let src = event.target.src;
    console.log(src);
    // parse src to get file name without extension
    // divide by -
}

// Displays the number of cards someone has
function displayOpponentsCards(numOfCards) {
        // Changes x and y positions of opponents cards
    switch (player) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
    }

    if (numOfCards) {
        let card = cardArray[Math.floor(Math.random() * 107)];
        interval -= 3;
        let img = document.createElement("img");
        img.src = CARD_IMG_DIRECTORY_PATH + "back" + CARD_IMG_EXTENSION;
        img.className = "playableCards";
        img.style.cssText = "left: " + interval + "%";
        let src = document.getElementById("header");
        src.appendChild(img);
        setTimeout(playersCards, 150, numOfCards - 1);
    }
}


function selectedCard(card, color) {
    let discard = cardArray[20];
    var discardCard = discard.card;
    var discardColor = discard.color;
    prompt(card, color, discardCard, discardColor);
//    if (discardCard === card || discardColor === color) {
//    }
}


// For UNO button
function uno() {
    // Code...
}


// I'm sticking with the color changes. I think it looks nicer than the backgrounds I found. Feel free to change it 
function colorChange(color) {
    switch (color) {
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
