
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


