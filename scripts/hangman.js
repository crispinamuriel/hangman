class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessed = [];
        this.status = 'playing';
    }
    get statusMessage () {
        if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`;
        } else if (this.status === 'finished') {
            return 'Great job! You guessed the word!';
        } else {
            return `Guesses left: ${this.remainingGuesses}`;
        }
    }
    calculateStatus () {
        const finished = this.word.every((letter) => this.guessed.includes(letter) || letter === ' ');

        if (this.remainingGuesses === 0) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }
    get puzzle () {
        let puzzle = '';
        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    }
    makeGuess (guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessed.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (this.status !== 'playing') {
            this.calculateStatus();
            return;
        }

        if (isUnique) {
            this.guessed.push(guess);
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--;
        }

        this.calculateStatus();
    }
}


// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessed = []
//     this.status = 'playing'
// }

// Hangman.prototype.getStatusMessage = function () {
//     if (this.status === 'failed') {
//         return `Nice try! The word was "${this.word.join('')}"`
//     } else if (this.status === 'finished') {
//         return 'Great job! You guessed the word!'
//     } else {
//         return `Guesses left: ${this.remainingGuesses}`
//     }
// }

// Hangman.prototype.calculateStatus = function () {
//     const finished = this.word.every((letter) => this.guessed.includes(letter))

//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = ''
//     this.word.forEach((letter) => {
//         if (this.guessed.includes(letter) || letter === ' ') {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })
//     return puzzle
// }

// Hangman.prototype.makeGuess = function (guess) {
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessed.includes(guess)
//     const isBadGuess = !this.word.includes(guess)

//     if(this.status !== 'playing'){
//         this.calculateStatus()
//         return 
//     }

//     if (isUnique) {
//         this.guessed.push(guess)
//     } 

//     if (isUnique && isBadGuess) {
//         this.remainingGuesses--
//     }

//     this.calculateStatus()
// }    

// Hangman.prototype.calculateStatus = function () {
//     let finished = true

//     this.word.forEach((letter) => {
//         if (this.guessed.includes(letter)) {

//         } else {
//             finished = false
//         }
//     })

//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }

// const lettersUnguessed = this.word.filter((letter) => {
//     return !this.guessed.includes(letter)
// })

// const finished = lettersUnguessed.length === 0

// }

// Hangman.prototype.calculateStatus = function () {
//     let finished = true

//     this.word.forEach((letter) => {
//         if (this.guessed.includes(letter)) {

//         } else {
//             finished = false
//         }
//     })

//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }