let homeScore = 0,
    guestScore = 0;

document.getElementById("home").textContent = homeScore;
document.getElementById("guest").textContent = guestScore;

function addOneHome(){
  homeScore += 1;
  document.getElementById("home").textContent = homeScore;
}
function addTwoHome(){
  homeScore += 2;
  document.getElementById("home").textContent = homeScore;
}
function addThreeHome(){
  homeScore += 3;
  document.getElementById("home").textContent = homeScore;
}

function addOneGuest(){
  guestScore += 1; 
  document.getElementById("guest").textContent = guestScore;
}
function addTwoGuest(){
  guestScore += 2;
  document.getElementById("guest").textContent = guestScore;
}
function addThreeGuest(){
  guestScore += 3;
  document.getElementById("guest").textContent = guestScore;
}
