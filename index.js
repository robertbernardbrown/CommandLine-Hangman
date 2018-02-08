console.log('Welcome to Command-Line Hangman!')

//ask player if they'd like to play, on confirmation begin game
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
            var allTheWords = ['Never', 'Gonna', 'Give', 'You', 'Up'];

            //run the game portion of the code. Contains further prompts for letter guesses and catches for guessing same letter or non-letters
            function runGame() {
                var randomNum = Math.floor(Math.random() * (allTheWords.length - 1));
                var theWord = allTheWords[randomNum];
                var wordConst = new Word.Word(theWord);
                var chances = 10;
                var alphabet = 'qwertyuiopasdfghjklzxcvbnm'
                var alphabetArr = alphabet.split('')

                //Guess letter prompt loops recursively until player is out of chances or guesses the puzzle
                function nextPrompt() {
                    if (wordConst.underscores() !== theWord && chances > 0) {
                        inquirer.prompt([{
                            type: 'input',
                            name: 'inputVal',
                            message: 'Guess a letter!'
                        }]).then(answers => {

                            var flag = false;
                            for (var i = 0; i < alphabetArr.length; i++) {
                                var element = alphabetArr[i];
                                if (element === answers.inputVal) {
                                    alphabetArr.splice(i, 1)
                                    flag = true;
                                }
                            }
                            if (flag) {
                                displayWord(answers.inputVal);
                                correctResponse(answers.inputVal);
                                nextPrompt();
                            } else {
                                console.log("Please choose a different letter.")
                                displayWord(answers.inputVal);
                                nextPrompt();
                            }

                        })
                    } else if (wordConst.underscores() !== theWord && chances === 0) {
                        gameOverCheck(chances);
                    } else {

                        if ((allTheWords.length - 1) > 0) {
                            console.log('You guessed the word! Onto the next one')
                            allTheWords.splice(randomNum, 1);
                            runGame();
                        } else {

                            inquirer.prompt([{
                                type: 'confirm',
                                name: 'playAgain',
                                message: "Congrats! That's all the words. You're never gonna let me down! \n Play again?"
                            }]).then(answers => {
                                if (answers.playAgain) {
                                    initialPrompt();
                                } else {
                                    console.log('No prob, come back later!')
                                }
                            })
                        }

                    }
                }

                //calls Word method guess and underscores on the guessed letter to reveal if player guessed correctly
                function displayWord(letter) {
                    wordConst.guess(letter);
                    console.log(wordConst.underscores());
                }

                //returns a response to the player based on if guess was right or wrong, also decrements chances if wrong
                function correctResponse(letter) {
                    var flag = false;
                    for (var i = 0; i < wordConst.word.length; i++) {
                        var element = wordConst.word[i].characterVal;
                        if (letter === element || letter.toUpperCase() === element) {
                            flag = true;
                        }
                    }
                    if (flag) {
                        console.log("Correct!");
                    } else {
                        console.log("Good try! Try Again");
                        chances--
                        console.log("You have " + chances + " chances left!");
                    }
                }

                //checks a players chances each turn and returns a game over message if chances = 0
                function gameOverCheck(chanceVar) {
                    if (chanceVar === 0) {
                        inquirer.prompt([{
                            type: 'confirm',
                            name: 'playAgain',
                            message: 'GAME OVER! Play again?'
                        }]).then(answers => {
                            if (answers.playAgain) {
                                console.log(wordConst)
                                initialPrompt();
                            } else {
                                console.log('No prob, come back later!')
                            }
                        })
                    }
                }

                displayWord('');
                nextPrompt()

            }

            runGame();

        } else {
            console.log('No sweat! Come back later if you decide you want to play.')
        }

    });
}

initialPrompt();