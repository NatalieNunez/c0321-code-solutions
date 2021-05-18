console.log('Lodash is loaded:', typeof _ !== 'undefined');
const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const ranks = [['A', 11], ['2', 2], ['3', 3], ['4', 4], ['5', 5], ['6', 6], ['7', 7], ['8', 8], ['9', 9], ['10', 10], ['J', 10], ['Q', 10], ['K', 10]];
const players = [
  { name: 'Player1', hand: [] },
  { name: 'Player2', hand: [] },
  { name: 'Player3', hand: [] },
  { name: 'Player4', hand: [] }
];

const cardDeck = () => {
  const deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < ranks.length; x++) {
      const card = { rank: ranks[x], suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
};
const shuffledDeck = _.shuffle(cardDeck());

for (let i = 0; i < players.length; i++) {
  if (i > 0) {
    shuffledDeck.shift();
    shuffledDeck.shift();
  }
  players[i].hand.push(shuffledDeck[0]);
  players[i].hand.push(shuffledDeck[1]);
}

const scores = [];
for (let i = 0; i < players.length; i++) {
  let score = 0;
  for (let x = 0; x < players[i].hand.length; x++) {
    score += players[i].hand[x].rank[1];
  }
  scores.push(score);
}

const indexOfWinner = scores.indexOf(Math.max(...scores));
const highScore = Math.max(...scores);
console.log(`${players[indexOfWinner].name} is the winner with a score of ${highScore}!`);
