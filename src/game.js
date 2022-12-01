// Length 108
const cardArray = [{card: "0R", color: "red"}, {card: "1R", color: "red"}, {card: "1R", color: "red"},
    {card: "2R", color: "red"}, {card: "2R", color: "red"}, {card: "3R", color: "red"}, {card: "3R", color: "red"},
    {card: "4R", color: "red"}, {card: "4R", color: "red"}, {card: "5R", color: "red"}, {card: "5R", color: "red"},
    {card: "6R", color: "red"}, {card: "6R", color: "red"}, {card: "7R", color: "red"}, {card: "7R", color: "red"},
    {card: "8R", color: "red"}, {card: "8R", color: "red"}, {card: "9R", color: "red"}, {card: "9R", color: "red"},
    {card: "skipR", color: "red"}, {card: "skipR", color: "red"}, {card: "reverseR", color: "red"},
    {card: "reverseR", color: "red"}, {card: "draw2R", color: "red"}, {card: "draw2R", color: "red"},
    {card: "0G", color: "green"}, {card: "1G", color: "green"}, {card: "1G", color: "green"},
    {card: "2G", color: "green"}, {card: "2G", color: "green"}, {card: "3G", color: "green"},
    {card: "3G", color: "green"}, {card: "4G", color: "green"}, {card: "4G", color: "green"},
    {card: "5G", color: "green"}, {card: "5G", color: "green"}, {card: "6G", color: "green"},
    {card: "6G", color: "green"}, {card: "7G", color: "green"}, {card: "7G", color: "green"},
    {card: "8G", color: "green"}, {card: "8G", color: "green"}, {card: "9G", color: "green"},
    {card: "9G", color: "green"}, {card: "skipG", color: "green"}, {card: "skipG", color: "green"},
    {card: "reverseG", color: "green"}, {card: "reverseG", color: "green"}, {card: "draw2G", color: "green"},
    {card: "draw2G", color: "green"}, {card: "0B", color: "blue"}, {card: "1B", color: "blue"},
    {card: "1B", color: "blue"}, {card: "2B", color: "blue"}, {card: "2B", color: "blue"}, {card: "3B", color: "blue"},
    {card: "3B", color: "blue"}, {card: "4B", color: "blue"}, {card: "4B", color: "blue"}, {card: "5B", color: "blue"},
    {card: "5B", color: "blue"}, {card: "6B", color: "blue"}, {card: "6B", color: "blue"}, {card: "7B", color: "blue"},
    {card: "7B", color: "blue"}, {card: "8B", color: "blue"}, {card: "8B", color: "blue"}, {card: "9B", color: "blue"},
    {card: "9B", color: "blue"}, {card: "skipB", color: "blue"}, {card: "skipB", color: "blue"},
    {card: "reverseB", color: "blue"}, {card: "reverseB", color: "blue"}, {card: "draw2B", color: "blue"},
    {card: "draw2B", color: "blue"}, {card: "0Y", color: "yellow"}, {card: "1Y", color: "yellow"},
    {card: "1Y", color: "yellow"}, { "2Y": "yellow"}, {card: "2Y", color: "yellow"}, {card: "3Y", color: "yellow"},
    {card: "3Y", color: "yellow"}, {card: "4Y", color: "yellow"}, {card: "4Y", color: "yellow"},
    {card: "5Y", color: "yellow"}, {card: "5Y", color: "yellow"}, {card: "6Y", color: "yellow"},
    {card: "6Y", color: "yellow"}, {card: "7Y", color: "yellow"}, {card: "7Y", color: "yellow"},
    {card: "8Y", color: "yellow"}, {card: "8Y", color: "yellow"}, {card: "9Y", color: "yellow"},
    {card: "9Y", color: "yellow"}, {card: "skipY", color: "yellow"}, {card: "skipY", color: "yellow"},
    {card: "reverseY", color: "yellow"}, {card: "reverseY", color: "yellow"}, {card: "draw2Y", color: "yellow"},
    {card: "draw2Y", color: "yellow"}, {card: "Wild", color: "wild"}, {card: "Wild", color: "wild"},
    {card: "Wild", color: "wild"}, {card: "Wild", color: "wild"}, {card: "draw4", color:"wild four"},
    {card: "draw4", color:"draw four"}, {card: "draw4", color:"draw four"}, {card: "draw4", color:"draw four"}]
// Global variables used for multiple functions
let interval = 70;
let card = cardArray[Math.floor(Math.random() * 105)];
let color = cardColorArray[3];


// Draws a number of cards and adds to the player's hand, can be used for drawing a card, +2, +4
function drawCards(numOfCards) {
    if (numOfCards !== 0) {
        let card = cardArray[Math.floor(Math.random() * 105)];
        let img = document.createElement("img");
        img.src = "cards/" + card + ".png";
        img.className = "playableCards";
        interval -= 3;
        img.style = "left: " + (interval) + "%";
        let src = document.getElementById("header");
        src.appendChild(img);
    }
}


// Prints as many cards as needed to the player's hand 
function playersCards(numOfCards) {
    if (numOfCards !== 0) {
        let card = cardArray[Math.floor(Math.random() * 105)];
        interval -= 3;
        let img = document.createElement("img");
        img.src = "cards/" + card + ".png";
        img.className = "playableCards";
        img.style = "left: " + interval + "%";
        let src = document.getElementById("header");
        src.appendChild(img);
        setTimeout(playersCards, 150, numOfCards - 1);
    }
}


// Displays the number of cards someone has (Maybe there's a way to do this I don't know)
function displayOpponentsCards(numOfCards) {
    let img = "cards/back.png";
    for (let i = 0; i < numOfCards; i++) {
        document.body.appendChild(img);
    }
}


// For UNO button 
function uno() {
    prompt("hello");
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
