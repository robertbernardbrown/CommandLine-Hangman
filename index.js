var inquirer = require('inquirer');
var Word = require('./word.js');
var Letter = require('./letter.js');

console.log('Welcome to Command-Line Hangman!')

function initialPrompt() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'confirmation',
        message: 'Ready to play?'
    }]).then(answers => {

        if (answers.confirmation) {

            var allTheWords = ['Jurassic Park', 'Land of the Lost', 'Hot Rod', 'Moana', 'Back to the Future'];
            var randomNum = Math.floor(Math.random() * 4) + 1;
            var theWord = allTheWords[randomNum];
            var wordArr = Word.arr;
            console.log(theWord)
            var wordConst = new Word.Word (theWord);
            var letterConst = new Letter (theWord);
            var chances = 10;

            function nextPrompt() {
                if(wordConst.underscores(wordArr) !== theWord) {
                inquirer.prompt([{
                    type: 'input',
                    name: 'inputVal',
                    message: 'Guess a letter!'
                }]).then(answers => {

                    displayWord(answers.inputVal)
                    guessResponse(answers.inputVal)
                    nextPrompt();

                })

                } else {
                    console.log('You guessed the word!')
                    allTheWords.splice(randomNum, 1);
                    console.log(allTheWords)
                }
            }

            function displayWord (letter) {
                wordConst.guess(letter);
                console.log(wordConst.underscores(wordArr));
            }

            function guessResponse(letter) {
                var flag = false;
                for (var i = 0; i < wordArr.length; i++) {
                    var element = wordArr[i].characterVal;
                    if (letter === element || letter.toUpperCase() === element) {
                        flag = true;
                    } 
                }
                if (flag) {
                    console.log("Correct!");
                } else {
                    console.log("Good guess! Try Again");
                    chances--
                    console.log("You have " + chances + " left!");
                }
            }

            function gameOverCheck (chanceVar) {
                
            }

            displayWord('');
            nextPrompt();
            

        } else {
            console.log('No sweat! Come back later if you decide you want to play.')
        }

    });
}

initialPrompt();