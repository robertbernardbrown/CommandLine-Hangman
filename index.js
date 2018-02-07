console.log('Welcome to Command-Line Hangman!')

function initialPrompt() {
    var Word = require('./word.js');
    var Letter = require('./letter.js');
    var inquirer = require('inquirer');

    inquirer.prompt([{
        type: 'confirm',
        name: 'confirmation',
        message: 'Ready to play?'
    }]).then(answers => {

        if (answers.confirmation) {
            var allTheWords = ['Dude', 'Manny', 'Hot Rod', 'Moana', 'Harry'];
            var randomNum = Math.floor(Math.random() * 4);
            var theWord = allTheWords[randomNum];
            console.log(theWord, Word.arr)
            var wordConst = new Word.Word(theWord);
            var wordArr = Word.arr;
            console.log(Word.arr)
            var letterConst = new Letter(theWord);
            var chances = 10;
            console.log(theWord, wordArr, Word.arr, wordConst, letterConst)

            function nextPrompt() {
                if (wordConst.underscores(wordArr) !== theWord && chances > 0) {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'inputVal',
                        message: 'Guess a letter!'
                    }]).then(answers => {

                        displayWord(answers.inputVal)
                        guessResponse(answers.inputVal)
                        nextPrompt();

                    })
                } else if (wordConst.underscores(wordArr) !== theWord && chances === 0) {
                    gameOverCheck(chances);
                } else {
                    console.log('You guessed the word!')
                    allTheWords.splice(randomNum, 1);
                    console.log(allTheWords)
                }
            }

            function displayWord(letter) {
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
                    console.log("You have " + chances + " chances left!");
                }
            }

            function gameOverCheck(chanceVar) {
                if (chanceVar === 0) {
                    inquirer.prompt([{
                        type: 'confirm',
                        name: 'playAgain',
                        message: 'GAME OVER! Play again?'
                    }]).then(answers => {
                        if (answers.playAgain) {
                            wordArr = [];
                            wordConst.clearVar();
                            console.log(wordArr, wordConst)
                            initialPrompt();
                        } else {
                            console.log('No prob, come back later!')
                        }
                    })
                }
            }

            displayWord('');
            nextPrompt();


        } else {
            console.log('No sweat! Come back later if you decide you want to play.')
        }

    });
}

initialPrompt();