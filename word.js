var Letter = require('./letter.js');

var wordArr = [];
var arrayThing = [];
// var letterVar = new Letter(element);

function Word (word) {
    this.word = word.split('').forEach(function(element) {
        var newLetter = new Letter(element)
        wordArr.push(newLetter)
    });
    this.underscores = function (arr) {
        var underscoreStr = '';
        for (var i = 0; i < arr.length; i++) {
            var underscoreVal = arr[i].replacer();
            underscoreStr += underscoreVal
        }
        return underscoreStr
    }
}

var wordConst = new Word ('Jurassic Park')
// wordConst.wordArray()
// wordConst.underscores(wordArr)
// console.log(wordArr);

console.log(wordConst);

console.log(wordArr[1].characterVal);

console.log(wordConst.underscores(wordArr));

// console.log();
