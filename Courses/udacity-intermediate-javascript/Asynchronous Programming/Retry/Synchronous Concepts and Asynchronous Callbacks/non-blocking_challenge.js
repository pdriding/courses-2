// Task 2 - print each word of this quote every second using built javascript method setInterval. Print the quote source all at once afterwards

// Tip: To stop a setInterval - call clearInterval()
// Tip: To pass arguments to the function setInterval is calling, add them as a 3rd (and 4th if you need it) argument to setInterval, after the milliseconds

// "The art of programming is the skill of controlling complexity."
// "-- Marijn Haverbeke, Eloquent JavaScript"

const quote = "The art of programming is the skill of controlling complexity.";
const reference = "-- Marijn Haverbeke, Eloquent JavaScript";

// setInterval(function, delay, quote)

function showMessage() {
  console.log("Hello, world!");
}

setInterval(showMessage, 2000);
