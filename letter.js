function Letter (characterVal) {
    this.characterVal = characterVal;
    this.guessed = false;
    this.replacer = function() {
        if (guessed) {

        }
    }
    this.checker = function(letter) {
        if (this.characterVal === letter) {
            this.guessed = true;
        }
    }
}

var letterVar = new Letter();