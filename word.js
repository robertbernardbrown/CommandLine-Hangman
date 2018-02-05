var Letter = require('./letter.js');

var wordArr = [];


function Word (word) {
    this.word = word;
    this.wordArray = function () {
        var hi = this.word;
        var format = hi.toLowerCase().replace(/\s+/g, '').split('');
        for (var i = 0; i < format.length; i++) {
            var element = format[i];
            var letterVar = new Letter(element);
            wordArr.push(letterVar);
        }
    }
    this.underscores = function () {
        
    }
}

var wordConst = new Word ('Jurassic Park')
wordConst.wordArray()
console.log(wordArr);

console.log(wordConst);


    //     var hi = this.word[i].toLowerCase().replace(/\s+/g, '').split('');
