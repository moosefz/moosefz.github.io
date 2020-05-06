var numSquares = 6;
var colors = [];
var correctColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newGameButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
  //Default is Medium difficulty
  newGame(numSquares);
  modeButtons[1].classList.add("selected");
  configureDifficulty();
  reset();
}

//Activate New Game button
function reset() {
    //New Game button - Reset game based on selected numSquares
    newGameButton.addEventListener("click", function() {
      this.textContent = "New Game";
      newGame(numSquares);
    })
}

//Difficulty Selection
function configureDifficulty() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");

      if(this.textContent === "Easy") {
        numSquares = 3;
      } else if(this.textContent === "Medium") {
        numSquares = 6;
      } else {
        numSquares = 9;
      }
      this.classList.add("selected");
      newGame.textContent = "New Game";
      newGame(numSquares);
    })
  }
}

function newGame(num) {
  //New Game button resets the board
    //New colors array is generated (see functions)
    colors = generateRandomColors(num);
    //New correct color is determined based on the new colors
    correctColor = pickRandomColor();

    //Add colours to blocks and based on numSquares, hide/show blocks
    for(var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      if(colors[i]) {
        squares[i].style.display = "block";
      } else {
        squares[i].style.display = "none";
      }
    }

    //Update headers, text, buttons to new game and default values
    colorDisplay.textContent = correctColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    newGame.textContent = "New Game";

    //Run Game Logic
    gameLogic();
}

//Game Logic
function gameLogic() {
  for(var i = 0; i < squares.length; i++) {
    //Click Listeners to squares
    squares[i].addEventListener("click", function() {
      //Store color of clicked square
      var clickedColor = this.style.backgroundColor;
      //Check to see if the correct color is clicked
      if(clickedColor === correctColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(correctColor);
        h1.style.backgroundColor = correctColor;
        newGameButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323"; //fade out
        messageDisplay.textContent = "Try Again!";
      }
    })
  }
}

//Changes each square to the correct color once solved
function changeColors(color) {
  for(var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//Picks a random correct colour from the colors array
function pickRandomColor() {
 var number = Math.floor(Math.random() * colors.length);
 return colors[number];
}

//Fill colors array with random colors
function generateRandomColors(num) {
  var arr = []; //empty array
  for(var i = 0; i < num; i++) {
    arr[i] = randomColor();
  }
  return arr;
}

//Generates a random color
function randomColor() {
  //RGB from 0-255 for each color
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  //return string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
