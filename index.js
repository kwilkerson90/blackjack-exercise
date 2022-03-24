
// Step 4- Dealing the Cards

/*document.getElementById("deal-button").addEventListener("click", dealCard);
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
*/




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

/* Step 6- Creating a deck
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
    this.names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]; 
    this.suits = ["diamonds", "hearts", "spades", "clubs"];
    const cards = [];

    for(let s=0; s < this.suits.length; s++) {
        for(let n=0; n < this.names.length; n++) {
            cards.push(new card (n+1, this.names[n], this.suits[s]));
        }
    }
    return cards;
}

//Step 7- Deal the Deck
/* Make two arrays- dealerHand, playerHand
 * Adjust the code so that when we click the "Deal" button, it will remove a card from the deck, 
    then place that card into the playerHand array
 * Is there an array method that allows us to remove and return an item from an array?
 * pop will let you remove items from an array
 * push will let you add items to an array
 * splice can also be used to add items to an array
 * the card that's pulled from the deck needs to be random
 * you can sort the deck in a random order, and then pull from there
 * you can use the Fisher Yates method for randomizing the deck    
 */

document.getElementById("deal-button").addEventListener("click", dealToPlayer);
function dealToPlayer() {
    const theDeck = new deck();
    console.log(theDeck)
    // const playerHand = [];
    // const dealerHand = []; 
    const dealerHand = document.getElementById("dealer-hand");
    const playerHand = document.getElementById("player-hand");
    let dealerOrPlayer = "player"
    for (let i = theDeck.length -1; i >0; i-- ) {
        let j = Math.floor(Math.random() *i)
        let k = theDeck[i]
        theDeck[i] = theDeck[j]
        theDeck[j] = k
    }

    for (let index = 0; index < 4; index++) {
        let popped = theDeck.pop();
        let currentCard = document.createElement("img");
        currentCard.src = `${popped.name}_of_${popped.suit}.png`;
        currentCard.width = 100;
        currentCard.height = 50;
        if (dealerOrPlayer == "player") {
            playerHand.append(currentCard);
        } else{
            dealerHand.append(currentCard);
        }
        if (index == 1) {
            dealerOrPlayer = "dealer";
        }
    }
}
/**
 * Step 8
 * Image from Cards
 * done in conjunction with Step 7
 * 
 */

/**
 * Step 9
 * 
 */