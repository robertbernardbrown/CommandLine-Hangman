// Game starts

// Random word is chosen from game memory

// Word constructor takes random word and puts the word into an array

// Word constructor uses Letter constructor to change the random word into blank spaces

// Blank spaces are displayed to user

// User guesses letters, guessed letter values change to true
// If guessed letters are in word, display letters
// If not, decrement chances and leave underscores displayed

var inquirer = require('inquirer');
var wordStuff = require('./word.js');
var letterStuff = require('./letter.js');

console.log('Welcome to Command-Line Hangman!')

function initialPrompt() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'confirmation',
        message: 'Ready to play?'
    }]).then(answers => {

        if (answers.confirmation) {

            function nextPrompt() {
                inquirer.prompt([{
                    type: 'input',
                    name: 'inputVal',
                    message: 'Guess a letter!'
                }]).then(answers => {

                    console.log(answers.inputVal);

                })
            }

            nextPrompt();

        } else {
            console.log('No sweat! Come back later if you decide you want to play.')
        }

    });
}

initialPrompt();