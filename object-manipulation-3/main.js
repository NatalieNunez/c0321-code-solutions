console.log('Lodash is loaded:', typeof _ !== 'undefined');
function playGame() {

  const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const players = [
    { name: 'Player1', hand: [], score: 0 },
    { name: 'Player2', hand: [], score: 0 },
    { name: 'Player3', hand: [], score: 0 },
    { name: 'Player4', hand: [], score: 0 }
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
  console.log(players);
}

playGame();
