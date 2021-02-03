var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var firstMove = true;
var level = 0;

//Press a Key to Start
$(document).keydown(function() {
  if (firstMove) {
    $("h1").text("Level " + level);
    nextSequence();
    firstMove = false;
  }
});

//User clicks a button
$(".btn").click(function(event) {
  if (!firstMove) {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    console.log(userChosenColor);
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  console.log(randomNumber);
  console.log(randomChosenColor);
}

function startOver(){
  level = 0;
  gamePattern = [];
  firstMove = true;
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      //Computer picks next color
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    var sound = new Audio("sounds/wrong.mp3");
    sound.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}
