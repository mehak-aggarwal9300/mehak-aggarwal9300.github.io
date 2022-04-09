// alert("linked");

// document.querySelector(".drum").addEventListener("click", handleClick);

var noofdrums=document.querySelectorAll(".drum").length;

//detecting button press
for (var i = 0; i <noofdrums; i++) {
  //added event listener to all the buttons
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  // alert("I got clicked!");
  // var audio=new Audio('sounds/crash.mp3')
  // audio.play();

  // to check which button got clicked
  // this.style.color="white";
  var buttonInnerHTML = this.innerHTML;
  makesound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});
}
// function handleClick(){
//   alert("I got clicked!");
// }

// function Audio(fileloc){
//   this.fileloc = fileloc;
//   this.play = function(){
//
//   }
// }

//detecting keyboard press, added it to entire doc instead of a specific button
document.addEventListener("keypress",function(event) {
  //alert("Key was pressed!");
// console.log(event);
makesound(event.key);
buttonAnimation(event.key);
});

function makesound(key){
  switch (key) {
    case "w": var tom1 =  new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;
    case "a": var tom2 =  new Audio("sounds/tom-2.mp3");
              tom2.play();
              break;
    case "s": var tom3 =  new Audio("sounds/tom-3.mp3");
              tom3.play();
              break;
    case "d": var tom4 =  new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;
    case "j": var crash =  new Audio("sounds/crash.mp3");
              crash.play();
              break;
    case "l": var snare =  new Audio("sounds/snare.mp3");
              snare.play();
              break;
    case "k": var kickbass =  new Audio("sounds/kick-bass.mp3");
              kickbass.play();
              break;

    default:console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}
////////////////////////////

// var bellboy1 = {
//   name:"Raj",
//   age:23,
//   permit:true,
//   languages: ["French","English"];
//   moveSuitcase: function(){
//      alert("May I take your suitcase?");
//      pickUpSuitcase();
//      move();
//  }
// }
// Construction funciton
// function BellBoy(name,age,permit,languages){
//   this.name=name;
//   this.age=age;
//   this.permit=permit;
//   this.languages=languages;
//   this.moveSuitcase: function(){
//        alert("May I take your suitcase?");
//        pickUpSuitcase();
//        move();
// }
// var bellboy2= new BellBoy("Timmy",19,true,["Hindi","English"]);
