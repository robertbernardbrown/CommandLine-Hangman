function Letter (characterVal) {
    this.characterVal = characterVal;
    this.guessed = false;
}

Letter.prototype.replacer = function() {
    if (this.guessed) {
        return this.characterVal
    } else {
        return "_"
    }
}

Letter.prototype.checker = function(letter) {
        if (this.characterVal === letter) {
            this.guessed = true;
        }
    }

module.exports = Letter

// var letterVar = new Letter('a');

// console.log(letterVar);

// console.log(letterVar.checker('k'));

// console.log(letterVar.replacer());
