var userClickedPattern =[];

var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColor;

var userChosenColor;

var userFirstClick;

//User Starts Game
$(document).keydown(function(event) {
  console.log(event.key);
  nextSequence();
  flashButton(randomChosenColor);
});

//User Clicks Button
$(".btn").click(function() {
  console.log(this.id)
  userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
});

function playSound(name){
  var colorSound = new Audio("sounds/" + color + ".mp3");
  colorSound.play();
}

function flashButton(color) {
  $("." + color).fadeOut(100).fadeIn(100);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
};
