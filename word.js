var Letter = require('./letter.js');

// var wordArr = [];

function Word(word) {
    this.makeArray = (word) => {
        var splitWord = word.split('');
        var wordArr = [];
        for (var i = 0; i < splitWord.length; i++) {
            var element = splitWord[i];
            wordArr.push(element);
        }
        return wordArr
    }
    this.word = this.makeArray(word);
}
    
    
//     word.split('').forEach(function (element) {
//         var newLetter = new Letter(element);
//         wordArr.push(newLetter);
//         return wordArr;
//     });
// }

Word.prototype.underscores = function () {
    var underscoreStr = '';
    for (var i = 0; i < wordArr.length; i++) {
        var underscoreVal = wordArr[i].replacer();
        underscoreStr += underscoreVal;
    }
    return underscoreStr;
    console.log(underscoreStr);
}

Word.prototype.guess = function (char) {
    for (var i = 0; i < wordArr.length; i++) {
        wordArr[i].checker(char);
        wordArr[i].checker(char.toUpperCase());
        wordArr[i].checker(' ');
        wordArr[i].checker("'");
        wordArr[i].checker("-");
    }
}

var newWord = new Word('pokemon');
console.log(newWord.word)

module.exports = {
    Word: Word
}

// var wordConst = new Word ("The Crank\'s")

// console.log(wordArr);

// wordConst.guess('u');
// wordConst.guess('j');

// console.log(wordConst.underscores(wordArr));

// wordConst.guess('s');

// console.log(wordConst.underscores(wordArr));

// wordConst.guess('r');

// console.log(wordConst.underscores(wordArr));

// wordConst.guess('a');

// console.log(wordConst.underscores(wordArr));
