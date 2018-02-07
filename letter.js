function Letter(characterVal) {
    this.characterVal = characterVal;
    this.guessed = false;
}

Letter.prototype.replacer = function () {
    if (this.guessed) {
        return this.characterVal;
    } else {
        return "_";
    }
}

Letter.prototype.checker = function (letter) {
    if (this.characterVal === letter) {
        this.guessed = true;
    }
}

module.exports = Letter;