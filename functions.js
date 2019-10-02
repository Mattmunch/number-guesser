function guessChecker(userGuess, selectedNumber) {
    if (userGuess === selectedNumber){
        return 'Winner';
    } else if (userGuess > selectedNumber) {
        return 'Lower';
    } else {
        return 'Higher';
    }
}
export default guessChecker;