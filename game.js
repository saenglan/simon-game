var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var gamePattern = [];

var randomChosenColor;

var userChosenColor;

var startGame = false;

//User Starts Game
$(document).keydown(function(event) {
  console.log(event.key);
  startGame = true;
});

playGame();




function playGame() {
  if (startGame === true) {
    nextSequence();
  }
}

//User Clicks Button
$(".btn").click(function() {
  console.log(this.id)
  userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
});



function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  playSound(randomChosenColor);
  flashButton(randomChosenColor);
  gamePattern.push(randomChosenColor);
};

function playSound(color) {
  var colorSound = new Audio("sounds/" + color + ".mp3");
  colorSound.play();
}

function flashButton(color) {
  $("." + color).fadeOut(100).fadeIn(100);
}
