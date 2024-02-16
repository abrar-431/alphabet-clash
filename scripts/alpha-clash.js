// function play(){
//     // Remove the home screen
//     const home = document.getElementById('home-screen');
//     home.classList.add('hidden');
//     // Show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

//Capture keyboard keypress
document.addEventListener('keyup', function (event) {
    const playerPressed = event.key;

    if(key === 'Escape') gameOver();
    // expected key to be pressed
    const currentAlphabet = document.getElementById('current-alphabet').innerText;
    if (playerPressed === currentAlphabet) {
        // Score update:
        // 1. Get the current Score
        const currentScoreText = document.getElementById('current-score').innerText;
        const currentScore = parseInt(currentScoreText);
        // 2. Update score
        const newScore = currentScore + 1;
        // 3. Set the new score
        document.getElementById('current-score').innerText = newScore;
        // Start a new round
        document.getElementById(currentAlphabet).style.backgroundColor = '#FFFFFF';
        continueGame();
    }
    else {
        // 1. Get the current life
        const currentLifeText = document.getElementById('current-life').innerText;
        const currentLife = parseInt(currentLifeText);
        // 2. Reduce the life number
        const newLife = currentLife - 1;

        // checking game over situation
        if (newLife === 0) {
            document.getElementById(currentAlphabet).style.backgroundColor = '#FFFFFF';
            gameOver();
        }
        // 3. Set the newlife
        document.getElementById('current-life').innerText = newLife;
    }
})

function continueGame() {
    //Step:1 Get a random alphabet
    const alphabet = getRandomAlphabet();

    // Set randomly generated alphabet to display
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // Highlight the alphabet
    const keyboardAlphabet = document.getElementById(alphabet);
    keyboardAlphabet.style.backgroundColor = '#FFA500';
}

function play() {
    // Show only playground
    hideElementById('home-screen');
    hideElementById('play-again');
    showElementById('play-ground');

    //Reset score and life
    document.getElementById('current-score').innerText = 0;
    document.getElementById('current-life').innerText = 5;
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('play-again');
    document.getElementById('final-score').innerText = document.getElementById('current-score').innerText;
}