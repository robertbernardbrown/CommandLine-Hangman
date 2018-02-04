function Letter (characterVal) {
    this.characterVal = characterVal;
    this.guessed = false;
    this.replacer = function() {
        if (!this.guessed) {
            return this.characterVal = "_"
        } else {
            return this.characterVal
        }
    }
    this.checker = function(letter) {
        if (this.characterVal === letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter


// console.log(letterVar);

// console.log(letterVar.checker('a'));

// console.log(letterVar.replacer());
