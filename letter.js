//Letter constructor
//First section takes in the letter value and sets it to false
function Letter(characterVal) {
    this.characterVal = characterVal;
    this.guessed = false;
}

//displays a letter's value if the underlying guessed value is true, otherwise displays an underscore
Letter.prototype.replacer = function () {
    if (this.guessed) {
        return this.characterVal;
    } else {
        return "_";
    }
}

//changes a letter's guessed value to true if it matches the guessed letter
Letter.prototype.checker = function (letter) {
    if (this.characterVal === letter) {
        this.guessed = true;
    }
}

module.exports = Letter;