// ********************************
//       ARRAYS AND VARIABLES
// ********************************

var wordList = ['hollywood', 'honolulu', 'houston', 'independence', 'irvine', 'jackson', 'apple', 'banana', 'orange', 'blue', 'green', 'purple', 'stairs', 'holiday', 'sesame', 'donkey', 'horse', 'dog', 'cat', 'mayor', 'jury', 'video', 'music', 'witch', 'flare', 'fireworks', 'bandaid', 'sink', 'toilet', 'comb', 'beer', 'bee', 'burger','pizza', 'cheese', 'traffic', 'class', 'thing', 'album', 'develop', 'program', 'application', 'flight', 'club', 'recent', 'rodent', 'rock', 'paper', 'scissors', 'problem', 'wood', 'table', 'chair', 'lizard', 'cloud', 'galaxy', 'elephant', 'submarine', 'penguin', 'shark', 'bubble', 'deal', 'compost', 'street', 'explain', 'system', 'technology', 'homework', 'front', 'pineapple', 'gum'];
var selectedWord = '';
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];  // blank spaces and correct letter guesses
var wrongLetters = [];  // show the player what they have guessed incorrectly already
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;


// ********************************
//            FUNCTIONS
// ********************************

function startGame () {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = selectedWord.split('');
    numBlanks = lettersInWord.length;
    // reset game items for new word
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];
    // create the blank spaces to match the new word
    for (let i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
    }
    // update html for current word
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winsCounter").innerHTML = winCount;

    // console.log(selectedWord);
    // console.log(lettersInWord);
    // console.log(numBlanks);
    // console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    // check the guessed letter against the word
    var isLetterFound = false;
    for (let i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterFound = true;
        }
    }
    // if letter is found, replace the letter's blank space
    if(isLetterFound) {
        for (let i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }
    // console.log(blanksAndSuccesses);
}

function gameOver() {
    console.log('Win Count: ' + winCount + '/\ Loss Counter: ' + lossCount + '/\ Gueses Left: ' + guessesLeft)
    // fluid update of player input
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(' ');
    // player wins
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert('You Won!');
        document.getElementById("winCounter").innerHTML = winCount;
        startGame();
    }
    // player losses
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost!");
        startGame();
    }
}


// ********************************
//           MAIN PROCESS
// ********************************

startGame();

// keyclick events

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    gameOver();

    // console.log(letterGuessed);
}


// ********************************
//       EXTRA COOL STUFF
// ********************************

// codepen -> https://codepen.io/quasimondo/pen/lDdrF
var colors = new Array(
[62,35,255],
[60,255,60],
[255,35,98],
[45,175,230],
[255,0,255],
[255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

$('#gradient').css({
    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

step += gradientSpeed;
if ( step >= 1 )
{
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
}
}

setInterval(updateGradient,10);