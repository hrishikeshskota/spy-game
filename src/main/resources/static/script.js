let players = [];
let current = 0;
let revealed = false;

function startGame() {
    let count = document.getElementById("players").value;

    fetch("/game?players=" + count)
        .then(res => res.json())
        .then(data => {
            players = data;
            current = 0;

            document.getElementById("setup").style.display = "none";
            document.getElementById("gameArea").classList.remove("hidden");

            updateTurn();
        });
}

function updateTurn() {
    let card = document.getElementById("card");

    document.getElementById("playerTurn").innerText = "Player " + (current + 1);
    document.getElementById("cardText").innerText = "Tap Reveal";

    // 🔥 IMPORTANT: remove BOTH classes
    card.classList.remove("revealed");
    card.classList.remove("spy");

    revealed = false;
}

function reveal() {
    if (!revealed) {
        let role = players[current];
        let card = document.getElementById("card");

        document.getElementById("cardText").innerText = role;

        // Remove old styles
        card.classList.remove("revealed", "spy");

        if (role.includes("SPY")) {
            card.classList.add("spy"); // RED
        } else {
            card.classList.add("revealed"); // BLUE
        }

        revealed = true;
    }
}

function hideCard() {
    document.getElementById("cardText").innerText = "Hidden";
    document.getElementById("card").classList.remove("revealed");
}

function nextPlayer() {
    current++;

    if (current < players.length) {
        updateTurn();
    } else {
        document.getElementById("cardText").innerText = "Game Over 🎉";
    }
}

function restartGame() {
    // reset variables
    players = [];
    current = 0;
    revealed = false;

    // reset UI
    document.getElementById("gameArea").classList.add("hidden");
    document.getElementById("setup").style.display = "block";

    document.getElementById("players").value = "";
}