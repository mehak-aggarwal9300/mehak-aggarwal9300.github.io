// alert("External js");

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber2);
var one="images/dice"+randomNumber1+".png";
console.log(one);
document.querySelector("img.img1").setAttribute("src",one);

var two="images/dice"+randomNumber2+".png";
console.log(two);
document.querySelector("img.img2").setAttribute("src",two);

// if(randomNumber1>randomNumber2) document.querySelector("footer p").innerHTML="Player 1 wins";
// else if(randomNumber1<randomNumber2) document.querySelector("footer p").innerHTML="Player 2 wins";
// else document.querySelector("footer p").innerHTML="It is a draw";

if(randomNumber1>randomNumber2) document.querySelector("h1").innerHTML="Player 1 Wins!";
else if(randomNumber1<randomNumber2) document.querySelector("h1").innerHTML="Player 2 Wins!";
else document.querySelector("h1").innerHTML="Draw!";
