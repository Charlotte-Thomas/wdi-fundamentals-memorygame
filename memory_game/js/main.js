var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];
var scoreCount = 0;

function checkForMatch() {
setTimeout(function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
	scoreCount+= 1;
  	alert("You found a match!" + '\r\n' + 'Your score:' + ' ' + scoreCount);
  	console.log('score:', scoreCount);
} else {
  	alert("Sorry, try again." + '\r\n' + 'Your score:' + ' ' + scoreCount);
  	console.log('score:', scoreCount);
}
}, 100);
};
//setTimeout delays the alert until both cards are flipped.

function flipCard() {
var cardID = this.getAttribute('data-id');
console.log('User flipped '+ cards[cardID].rank);
cardsInPlay.push(cards[cardID].rank);
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);
this.setAttribute('src', cards[cardID].cardImage);
if (cardsInPlay.length === 2) {
checkForMatch();
}
};

var refresh = function() {
	console.log('reset');
	var doc = document.getElementById('game-board');
	while (doc.hasChildNodes()) {
		doc.removeChild(doc.firstChild);
		cardsInPlay.pop();
	};
	createBoard();
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
    document.getElementById('reset').addEventListener('click', refresh);
}
};

createBoard();
  



