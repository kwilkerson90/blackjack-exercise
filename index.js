
// Step 4

document.getElementById("deal-button").addEventListener("click", dealCard);
function dealCard() {
    let card = document.createElement("img");
    let dealerOrPlayer = "dealer";
    const dealer = document.getElementById("dealer-hand");
    const player = document.getElementById("player-hand");

    for (let index = 0; index < 4; index++) {
        const card = document.createElement("img");
        card.src = "ace_of_spades.png";
        card.height = 130;
        card.width = 90;
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
//