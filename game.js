// main
var gamePattern = [];
var userPattern = [];
var level = 0;
var start = true;
var next = true;

$(document).keypress(function () {
  if (start) {
    start = false;
    nextSequence();
  }
});

$(".btn").click(function () {
    if(next){
    next = false;
    var userColor = $(this).attr("id");
    userPattern.push(userColor);
    btnPress(userColor);
  
    next = checkAnswer(userPattern.length - 1)

  }
  });

// check answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (gamePattern.length === userPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      
    }
    return true
  } else {
    wrongAnswer();
     // restart
     gamePattern = [];
     userPattern = [];
     level = 0;
     start = true;

     return true;
  }
}

// wronganswer

function wrongAnswer() {
  // sound
  btnSound("wrong");
  $("#level-title").text("Game Over, Press any key to restart");
  $("body").css("background-color", "red");
  setTimeout(function () {
    $("body").css("background-color", "#011F3F");
  }, 100);
}

// animate
function animateFlash(cName) {
  $("#" + cName)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}

// next sequence
function nextSequence(params) {
  userPattern.length = 0;


  // change level
  level++;
  $("#level-title").text("Level " + level);

  var color = randomButtonGen();
  gamePattern.push(color);
  animateFlash(color);
  btnSound(color);
}
// click and sound
function btnPress(sName) {
  btnClick(sName);
  btnSound(sName);
}

// box shadow func
function btnClick(key) {
  $("#" + key).toggleClass("pressed");
  setTimeout(function () {
    $("#" + key).toggleClass("pressed");
  }, 100);
}

// sound on click
function btnSound(cName) {
  var audio = new Audio("sounds/" + cName + ".mp3");
  audio.play();
}

// random button genrator

function randomButtonGen() {
  var num = Math.floor(Math.random() * 4);
  switch (num) {
    case 0:
      return "green";
    case 1:
      return "blue";
    case 2:
      return "yellow";
    case 3:
      return "red";

    default:
      break;
  }
}

// Another way of making box shadow

// if ($(this).hasClass("red")) {
//   $(".red").toggleClass("pressed");
//   setTimeout(function () {
//     $(".red").toggleClass("pressed");
//   }, 100);
// } else if ($(this).hasClass("green")) {
//   $(".green").toggleClass("pressed");
//   setTimeout(function () {
//     $(".green").toggleClass("pressed");
//   }, 100);
// } else if ($(this).hasClass("blue")) {
//   $(".blue").toggleClass("pressed");
//   setTimeout(function () {
//     $(".blue").toggleClass("pressed");
//   }, 100);
// } else if ($(this).hasClass("yellow")) {
//   $(".yellow").toggleClass("pressed");
//   setTimeout(function () {
//     $(".yellow").toggleClass("pressed");
//   }, 100);
// }
