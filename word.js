var Letter = require('./letter.js');

function Word(word) {
    this.makeArray = (word) => {
        var splitWord = word.split('');
        var wordArr = [];
        for (var i = 0; i < splitWord.length; i++) {
            var element = splitWord[i];
            var wordElement = new Letter(element)
            wordArr.push(wordElement);
        }
        return wordArr
    }
    this.word = this.makeArray(word);
}

Word.prototype.underscores = function () {
    var underscoreStr = '';
    var thisWord = this.word;
    for (var i = 0; i < thisWord.length; i++) {
        var underscoreVal = thisWord[i].replacer();
        underscoreStr += underscoreVal;
    }
    return underscoreStr;
    console.log(underscoreStr);
}

Word.prototype.guess = function (char) {
    var thisWord = this.word;
    for (var i = 0; i < thisWord.length; i++) {
        thisWord[i].checker(char);
        thisWord[i].checker(char.toUpperCase());
        thisWord[i].checker(' ');
        thisWord[i].checker("'");
        thisWord[i].checker("-");
    }
}

module.exports = {
    Word: Word
}