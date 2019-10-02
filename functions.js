function guessChecker(userGuess, selectedNumber) {
    if (userGuess === selectedNumber){
        return 0;
    } else if (userGuess > selectedNumber) {
        return -1;
    } else {
        return 1;
    }
    
}
export default guessChecker;