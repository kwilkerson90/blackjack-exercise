
// Step 4

document.getElementById("deal-button").addEventListener("click", dealCard);
function dealCard() {
    let card = document.createElement("img");
    let dealerOrPlayer = "dealer";
    const dealer = document.getElementById("dealer-hand");
    const player = document.getElementById("player-hand");

    for (let index = 0; index < 4; index++) {
        const card = document.createElement("img");
        card.src = "8_of_spades.png";
        console.log(index);
        if (dealerOrPlayer == "dealer") {
            dealer.appendChild(card);
        } else {
            player.appendChild(card);
        }

        if (index == 1) {
            dealerOrPlayer = "player";
        }
    }
}
// Step 5
// Deal one more card to the player, and then another card to the dealer
// Is there any code that is repeated? is there a way to write a function to deal from
// the card to whichever player we chose?


document.getElementById("hit-button").addEventListener("click", hitMe);
function hitMe() {
    let card1 = document.createElement("img");
    let dealerOrPlayer = "player";
    const dealer = document.getElementById("dealer-hand");
    const player = document.getElementById("player-hand");
    card1.src = "ace_of_hearts.png";

    for (let index = 0; index < 2; index++) {
        const card1 = document.createElement("img");
        card1.src = "5_of_hearts.png";
        console.log(index);
        if (dealerOrPlayer == "dealer") {
            dealer.appendChild(card1);
        } else {
            player.appendChild(card1);
        }
        if (index == 0) {
            dealerOrPlayer = "dealer";
        }
    }
}

/* Creating a deck
 * The deck can be an array; each object in the deck will represent a card
 * You don't have to code a whole deck of cards
 *  You can write a function to generate a deck 
 * buildDeck function will return an array with 52 card objects
 * 4 sets of 13
 * */ 
//First, create a card object
function card(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
}
//Next, make a deck object
function deck() {
    this.names = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
    this.suits = ["diamonds", "hearts", "spades", "clubs"];
    const cards = [];

    for(let s=0; s < this.suits.length; s++) {
        for(let n=0; n < this.names.length; n++) {
            cards.push(new card (n+1, this.names[n], this.suits[s]));
        }
    }
    return cards;
}
//Then, make a new deck of cards and print it out in the console 
const theDeck = new deck();
console.log(theDeck);
