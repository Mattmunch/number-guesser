// IMPORT MODULES under test here:
// import example from '../src/example.js';
import guessChecker from '../functions.js'; 
const test = QUnit.test;

test('If the guessed number is lower than the chosen number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 4;
    const selectedNumber = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const guessResult = guessChecker(userGuess, selectedNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guessResult, 'Higher');

});

test('If the guessed number is higher than the chosen number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 8;
    const selectedNumber = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const guessResult = guessChecker(userGuess, selectedNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guessResult, 'Lower');

});

test('If the guessed number is equal to the chosen number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 5;
    const selectedNumber = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const guessResult = guessChecker(userGuess, selectedNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(guessResult, 'Winner');

});


