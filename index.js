

let points = 0;
let pointsGuest = 0;
let score = document.getElementById("home-score-text")
let scoreGuest = document.getElementById("guest-score-text")
let buttonOnePoint = document.getElementById("plus-one");
let buttonTwoPoints = document.getElementById("plus-two");

function addOnePoint() {
    console.log("+1 point")
    points += 1;
    score.textContent = points;
   
}

function addTwoPoints() {
    console.log("+2 ponts")
    points += 2;
    score.textContent = points;
}

function addThreePoints() {
    console.log("+3 points")
    points += 3;
    score.textContent = points;
}

function addOnePointGuest() {
    console.log("+1 point")
    pointsGuest += 1;
    scoreGuest.textContent = pointsGuest;
   
}

function addTwoPointsGuest() {
    console.log("+2 ponts")
    pointsGuest += 2;
    scoreGuest.textContent = pointsGuest;
}

function addThreePointsGuest() {
    console.log("+3 points")
    pointsGuest += 3;
    scoreGuest.textContent = pointsGuest;
}