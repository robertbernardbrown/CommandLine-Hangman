var Letter = require('./letter.js');

var wordArr = [];
// var letterVar = new Letter(element);

function Word (word) {
    this.word = word.split('').forEach(function(element) {
        var newLetter = new Letter(element)
        console.log(newLetter)
    });
    // this.wordArray = function () {
    //     var hi = this.word;
    //     var format = hi.toLowerCase().replace(/\s+/g, '').split('');
    //     for (var i = 0; i < format.length; i++) {
    //         var element = format[i];
    //         var letterVar = new Letter(element);
    //         wordArr.push(letterVar);
    //     }
    // }
    // this.underscores = function (arr) {
    //     arr.replacer();
    // }
}

var wordConst = new Word ('Jurassic Park')
// wordConst.wordArray()
// wordConst.underscores(wordArr)
// console.log(wordArr);

console.log(wordConst);


