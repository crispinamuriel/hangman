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
   puzzleArray = game1.puzzle.split('');
   puzzleArray.forEach((char) => {
      let span = document.createElement('span');
      span.innerText = char;
      puzzleEL.appendChild(span);
   });
   guessesEl.textContent = game1.statusMessage;
};

const startGame = async () => {
   const puzzle = await getPuzzle('2');
   game1 = new Hangman(puzzle, 5);
   render();
   guessedEl.textContent = '';
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2').then((puzzle) => {
//    console.log(puzzle);
// }).catch((err) => {
// console.log(`Error: ${err}`);
// });

// getCountry('MX').then((country) => {
//    console.log(country.name);
// }).catch((err) => {
// console.log(`Error: ${err}`);
// });

// getLocation().then((location) => {
//    console.log(`You are currently in ${location.city}, ${location.region}, ${location.country}!`);
// }).catch((err) => {
//    console.log(`Err: ${err}`);
// });

// getCurrentCountry().then((country) => {
//    console.log(country.name)
// }).catch((error) => {
//    console.log(error)
// });

// getLocation().then((location) => {
//    return getCountry(location.country);
// }).then((country) => {
//    console.log(country.name);
// }).catch((err) => {
//    console.log(`Err: ${err}`);
// })

//1. Create getLocation function which takes no arguments
//2. Setup getLocation to m ake a request to the url and parse the response data
//3. Use getLocation to print the city, region, and country information 'you are currently in new york new york us'

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//    if(response.status === 200) {
//       return response.json();
//    } else {
//       throw new Error(`Unable to fetch the puzzle`);
//    }
// }).then((data) =>{
//    console.log(data.puzzle);
// }).catch((error) => {
//    console.log(error);
// });




/* CALLBACK API CODE
getPuzzle("2", (error, puzzle) => {
   if (error) {
      console.log(`Error: ${error}`);
   } else {
      console.log(puzzle);
   }
});

getCountry("MX", (error, country) => {
   if (error) {
      console.log(error);
   } else {
      console.log(`Country name: ${country.name}`);
   }
});
*/



/* Primitive value: string, number, boolean, null, undefined
Object tree     myObject --> Object.prototype ---> null 
Array:          myArray -->  Array.prototype  -->  Object.prototype ---> null  
Function:       myFunc --> Function.prototype --> Object.prototype ---> null       
String:         myString --> String.prototype --> Object.prototype --> null     
Number:         myNumber --> Number.prototype --> Object.prototype --> null
Boolean:        myBool -->  Boolean.prototype --> Object.prototype --> null
*/