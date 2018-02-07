var Letter = require('./letter.js');

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

module.exports = {
    Word: Word
}
