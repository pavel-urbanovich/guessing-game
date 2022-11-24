class GuessingGame {
    constructor() {}

    setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
        return Math.round((this.min + this.max) / 2); 
    }

    lower() {
        return this.max = Math.round((this.min + this.max) / 2);
    }

    greater() {
        return this.min = Math.round((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
