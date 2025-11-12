// Task 2 - print each word of this quote every second using built javascript method setInterval. Print the quote source all at once afterwards

// Tip: To stop a setInterval - call clearInterval()
// Tip: To pass arguments to the function setInterval is calling, add them as a 3rd (and 4th if you need it) argument to setInterval, after the milliseconds

// "The art of programming is the skill of controlling complexity."
// "-- Marijn Haverbeke, Eloquent JavaScript"

const quote = "The art of programming is the skill of controlling complexity.";
const reference = "-- Marijn Haverbeke, Eloquent JavaScript";

// setInterval(function, delay, quote)

showMessage = () => {
  let i = 0;
  return (q) => {
    const q1 = q.split(" ");
    console.log(q1.length, q1[i], i);
    if (i === q1.length - 1) {
      clearInterval(hello);
      console.log(reference);
    }
    i++;
  };
};

const hello = setInterval(showMessage(), 1000, quote, reference);

console.log(typeof hello);
