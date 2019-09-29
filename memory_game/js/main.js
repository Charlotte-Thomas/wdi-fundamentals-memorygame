console.log('Up and running!');

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
}

function flipCard(cardID) {
console.log('User flipped '+ cards[cardID]);
cardsInPlay.push(cards[cardID]);
checkForMatch();
};

//or could put .length === 2 before checkForMatch?

flipCard(0);
flipCard(2);

/* 
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
alert('You found a match!');
}else {
 alert('Sorry, try again.');
 }
} 
*/

