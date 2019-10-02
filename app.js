import guessChecker from './functions.js';
const submitButton = document.getElementById('submit-answer');
const guessEntry = document.getElementById('guess-entry');
const guessesRemaining = document.getElementById('guesses-remaining');
let selectedNumber = Math.floor((Math.random() * 20));
const retryButton = document.getElementById('retry-button');
let triesRemaining = 4;
const losingImage = document.getElementById('losing-image');
submitButton.addEventListener('click', () => {
    const value = parseInt(guessEntry.value, 10);
    triesRemaining -= 1;
    let triesMessage = 'You have ' + triesRemaining + ' tries left';

    const guessCheckerAnswer = guessChecker(value, selectedNumber);
    if (guessCheckerAnswer === 0) {
        document.getElementById('guess-result').textContent = ('  Good Job! You did it!');
    } else if (guessCheckerAnswer === 1) {
        document.getElementById('guess-result').textContent = ('  Higher');
        if (triesRemaining < 1) {
            document.getElementById('guess-result').textContent = ('  YOU LOSE!');
        }
    } else {
        document.getElementById('guess-result').textContent = ('  Lower');
    }
    if (triesRemaining < 1) {
        triesRemaining = 1;
        document.getElementById('submit-answer').disabled = true;
        retryButton.classList.remove('hidden');
        losingImage.classList.remove('hidden');
    
    }
    guessesRemaining.textContent = triesMessage;
});
retryButton.addEventListener('click', () => {
    location.reload();
});

