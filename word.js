var Letter = require('./letter.js');

var wordArr = [];
var arrayThing = [];
// var letterVar = new Letter(element);

function Word (word) {
    this.word = word.split('').forEach(function(element) {
        var newLetter = new Letter(element)
        wordArr.push(newLetter)
        return wordArr
    });
}

Word.prototype.underscores = function () {
    var underscoreStr = '';
    var thisWord = this.word;
    for (var i = 0; i < thisWord.length; i++) {
        var underscoreVal = thisWord[i].replacer();
        underscoreStr += underscoreVal
    }
    return underscoreStr
}

Word.prototype.guess = function (char) {
    var thisWord = this.word;
    for (var i = 0; i < thisWord.length; i++) {
        thisWord[i].checker(char);
    }
}

var wordConst = new Word ('Jurassic Park')
// wordConst.wordArray()
// wordConst.underscores(wordArr)
// console.log(wordArr);

// console.log(wordConst);

console.log(wordArr);

// wordConst.underscores(wordArr);

// console.log(wordConst.guess('u'));

console.log(wordArr)


// console.log();
