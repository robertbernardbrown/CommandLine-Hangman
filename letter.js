function Letter (characterVal) {
    this.characterVal = characterVal;
    this.guessed = false;
    this.replacer = function() {
        if (this.guessed) {
            return this.characterVal
        } else {
            return this.characterVal = "_"
        }
    }
    this.checker = function(letter) {
        if (this.characterVal === letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter

// var letterVar = new Letter('a');

// console.log(letterVar);

// console.log(letterVar.checker('a'));

// console.log(letterVar.replacer());
