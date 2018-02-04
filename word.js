// function Word (word) {
//     this.word = word;
//     this.guessed = false;
//     this.replacer = function() {
//         if (guessed) {

//         }
//     }
//     this.checker = function(letter) {
//         if (this.characterVal === letter) {
//             this.guessed = true;
//         }
//     }
// }

// var letterVar = new Letter();

var Letter = require('./letter.js');

console.log(Letter);

var letterVar = new Letter('a');

console.log(letterVar)
