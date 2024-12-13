let homeScore = 0;
let guestScore = 0;

function updateScore(elementId, score) {
    document.getElementById(elementId).textContent = score;
}

function homePlusOne() {
    homeScore += 1;
    updateScore('home-score', homeScore);
}

function homePlusTwo() {
    homeScore += 2;
    updateScore('home-score', homeScore);
}

function homePlusThree() {
    homeScore += 3;
    updateScore('home-score', homeScore);
}

// Function to update the Guest score
function guestPlusOne() {
    guestScore += 1;
    updateScore('guest-score', guestScore);
}

function guestPlusTwo() {
    guestScore += 2;
    updateScore('guest-score', guestScore);
}

function guestPlusThree() {
    guestScore += 3;
    updateScore('guest-score', guestScore);
}
