import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleEL = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const guessedEl = document.querySelector('#guessed');
let game1;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    guessedEl.textContent = guess;
    render();
});

const render = () => {
    puzzleEL.innerHTML = '';
    let puzzleArray = game1.puzzle.split('');
    puzzleArray.forEach((char) => {
        let span = document.createElement('span');
        span.innerText = char;
        puzzleEL.appendChild(span);
    });
    guessesEl.textContent = game1.statusMessage;
};

const startGame = async() => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
    guessedEl.textContent = '';
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();