// ------- game logic -------
var rollA = Math.floor(Math.random() * 6 + 1);
var rollB = Math.floor(Math.random() * 6 + 1);
var winner = (rollA >= rollB) ? "Player 1" : "Player 2";
var msg = (rollA == rollB) ? "It's a Draw!" : winner + " wins!";

//console.log(rollA);
//console.log(rollB);
//console.log(msg);

// ----- manipulate DOM -----
/*
// create file paths
var imgPathA = "./images/dice" + rollA + ".png";
var imgPathB = "./images/dice" + rollB + ".png";

//console.log(imgPathA);
//console.log(imgPathB);

// create pointers to HTML elements
var imgA = document.querySelector("#img1");
var imgB = document.querySelector("#img2");
var heading = document.querySelector("h1");

// modify elements to show game state
imgA.setAttribute("src", imgPathA);
imgB.setAttribute("src", imgPathB);
heading.textContent = msg;
*/

// one-lining everything
document.querySelector("#img1").setAttribute("src", "./images/dice" + rollA + ".png");
document.querySelector("#img2").setAttribute("src", "./images/dice" + rollB + ".png");
document.querySelector("h1").textContent = msg;