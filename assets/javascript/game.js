// ********************************
// GLOBAL VARIABLES
// ********************************
// ARRAYS AND VARIABLES
let wordList = ['hollywood', 'honolulu', 'houston', 'independence', 'irvine', 'jackson', 'apple', 'banana', 'orange', 'blue', 'green', 'purple', 'stairs', 'holiday', 'sesame', 'donkey', 'horse', 'dog', 'cat', 'mayor', 'jury', 'video', 'music', 'witch', 'flare', 'fireworks', 'bandaid', 'sink', 'toilet', 'comb', 'beer', 'bee', 'burger','pizza', 'cheese', 'traffic', 'class', 'thing', 'album', 'develop', 'program', 'application', 'flight', 'club', 'recent', 'rodent', 'rock', 'paper', 'scissors', 'problem', 'wood', 'table', 'chair', 'lizard', 'cloud', 'galaxy', 'elephant', 'submarine', 'penguin', 'shark', 'bubble', 'deal', 'compost', 'street', 'explain', 'system', 'technology'];
let selectedWord = '';
let lettersInWord = [];
let blankSpaces = 0;
let blanksAndLetters = [];  // m u _ _ c
let wrongLetters = [];

// COUNTERS
var winCount = 0;
var guessesLeft = 10;


// ********************************
// FUNCTIONS
// ********************************

function startGame () {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = selectedWord.split('');
    blankSpaces = lettersInWord.length;

    // reset game fields
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndLetters = [];

    // show correct letters with amount of blank spaces
    for (let i=0; i<blankSpaces; i++) {
        blanksAndLetters.push('_');
    }

    // update htmnl for new word
    document.getElementById("wordToGuess").innerHTML = blanksAndLetters.join(' ');
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winsCounter").innerHTML = winCount;

    // testing
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(blankSpaces);
    console.log(blanksAndLetters);
}

function checkUSerGuess(letter) {
    // check the user key click against letters in word
    let lettersInWord = false;

    for (let i = 0; i<)blankSpaces; i++) {

    }

}

// ********************************
// MAIN PROCESS
// ********************************
// starts the game
startGame();

// user key clicks
document.onkeyup = function(event) {
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // testing
    console.log(userGuess);
}
