var Letter = require("./letter.js");

//Word constructor
//makeArray returns an array of Letter obbjects which is then used in this.word to be a callable variable in index
function Word(word) {
	this.makeArray = (word) => {
		var splitWord = word.split("");
		var wordArr = [];
		for (var i = 0; i < splitWord.length; i++) {
			var element = splitWord[i];
			var wordElement = new Letter(element);
			wordArr.push(wordElement);
		}
		return wordArr;
	};
	this.word = this.makeArray(word);
}

//underscores creates a string of "_" (underscores) based on the word. If the letter has been guessed, will return the letter
Word.prototype.underscores = function () {
	var underscoreStr = "";
	var thisWord = this.word;
	for (var i = 0; i < thisWord.length; i++) {
		var underscoreVal = thisWord[i].replacer();
		underscoreStr += underscoreVal;
	}
	return underscoreStr;
	console.log(underscoreStr);
};

//guess runs the Letter.checker function to see if a Letter objects underlying guessed variable should be changed to 'true'
Word.prototype.guess = function (char) {
	var thisWord = this.word;
	for (var i = 0; i < thisWord.length; i++) {
		thisWord[i].checker(char);
		thisWord[i].checker(char.toUpperCase());
		thisWord[i].checker(" ");
		thisWord[i].checker("'");
		thisWord[i].checker("-");
	}
};

module.exports = {
	Word: Word
};